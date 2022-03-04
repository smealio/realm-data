import { gql } from "@apollo/client";
import client from "../shared/apollo-client";

function sortByProperty(property){
   return function(a,b){
      if(a[property] > b[property])
         return 1;
      else if(a[property] < b[property])
         return -1;

      return 0;
   }
}

export async function GetAllRealmsAsync(){
  const { data } = await client.query({
      query: gql`query realms($first: Int $skip: Int){realms(first: $first skip: $skip ){id realmId name size owner feature1 feature2 feature3 partner metrics{name totalAmount totalAdded} supplies{name totalAmount} staked resourceId}}`
});
return data;
}

export async function GetRealmStatsAsync(){
  const { data } = await client.query({
      query: gql`query stats { stats {id totalRealms totalCities totalFarms totalAquariums totalResearchLabs totalCollects totalStaked}}`
});
return data;
}

export async function GetFeatureRarity(first, skip){
  first = 1000;
  skip = 0;
  const { data } = await client.query({
      query: gql`query realms{realms(first: ${first} skip: ${skip} ){id realmId name size owner feature1 feature2 feature3 partner metrics{name totalAmount totalAdded} supplies{name totalAmount} staked resourceId}}`
});

let realms=data.realms;
let featureList = [];

for(let r=0;r<realms.length;r++)
{
  featureList.push(realms[r].feature1);
  featureList.push(realms[r].feature2);
  featureList.push(realms[r].feature3);
};
;
let featureOccurrences = {};

for (let feat of featureList) {
    if (featureOccurrences[feat]) {
      featureOccurrences[feat] += 1;
    } else {
      featureOccurrences[feat] = 1;
    }
  }

  var featureSortedArray = [];
for (let o in featureOccurrences)
{
  let obj = {};
  featureSortedArray.push([o,featureOccurrences[o]]);
}
featureSortedArray.sort(function(a,b){return a[1] -b[1]});

let response = [];
for (let f=0;f<featureSortedArray.length;f++)
{
  var obj = {};
  obj.feature = featureSortedArray[f][0];
  obj.total = featureSortedArray[f][1];
  response.push(obj);
}
return response;
}

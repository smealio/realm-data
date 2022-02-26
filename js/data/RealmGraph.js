let realmGraphUrl = "https://api.thegraph.com/subgraphs/name/jona/realm";

///Get Stats About Realm For Useage
///
///
function Populate() {
  let getStatsQuery = `query stats
{
    stats
    {
        id totalRealms totalCities totalFarms totalAquariums totalResearchLabs totalCollects totalStaked
    }
}`

const obj = fetch(realmGraphUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: getStatsQuery,
    variables: {
      skip: 0,
    },
  }),
})
.then((response)=>response.json())
.then((responseData)=>{

  //Populate Total Card
  let totalCard = document.getElementById("stats-total-realms");
    totalCard.innerText = responseData.data.stats[0].totalRealms;

    let totalRealms=responseData.data.stats[0].totalRealms;

    //Populate Total Staked Card
    let totalStakedCard = document.getElementById("stats-total-staked-realms");
      totalStakedCard.innerText = responseData.data.stats[0].totalStaked;

      //Populate Total Farms Card
      let totalFarmsCard = document.getElementById("stats-total-farms");
        totalFarmsCard.innerText = responseData.data.stats[0].totalFarms;

        //Populate Total Aquariums Card
        let totalAquariumsCard = document.getElementById("stats-total-aquariums");
          totalAquariumsCard.innerText = responseData.data.stats[0].totalAquariums;

          //Populate Total Labs Card
          let totalLabsCard = document.getElementById("stats-total-labs");
            totalLabsCard.innerText = responseData.data.stats[0].totalResearchLabs;

    //GetFeatureRarity(totalRealms);
});

}

///Get All The Realms
///
///
function GetFeatureRarity(totalRealms) {
const obj = fetch('https://api.thegraph.com/subgraphs/name/jona/realm', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
    query realms(
$skip: Int)
{
realms(
skip: $skip )
    {
       id realmId name size owner feature1 feature2 feature3 partner
       metrics
       {
           name totalAmount totalAdded
       }
       supplies
       {
           name totalAmount
       }
       staked
       resourceId
    }
    }
      `,
    variables: {
      skip: 0,
    },
  }),
})
.then((response)=>response.json())
.then((responseData)=>{

});
}

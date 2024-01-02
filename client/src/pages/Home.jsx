import React from 'react'
import { useState , useEffect } from 'react'
import { useStateContext } from '../context'
import DisplayCampaigns from '../components/DisplayCampaigns';

function Home() {
  const [isLoading , setIsLoading] = useState(false);
  const [campaign , setCampaign] = useState([]);
  const {address , contract , getCampaigns} = useStateContext();

  const fetchCampaigns = async ()=>{
    setIsLoading(true);
    const data = await getCampaigns();
    console.log(data);
    setCampaign(data);
    setIsLoading(false);
  }

  useEffect(()=>{
    if(contract) fetchCampaigns();
  } , [address , contract]);

  return (
      <DisplayCampaigns 
        title="All Campaigns"
        isLoading = {isLoading}
        campaigns = {campaign}
      />
  )
}

export default Home

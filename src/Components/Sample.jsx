import React,{useState,useEffect} from "react";
import NewsCard from "./NewsCard";

const Sample=()=>{
    const [data , setNews] = useState([]);
   const getSportsData= async ()=>{
      try{
        const res= await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=37016bdc48bc45e48ecd04de68c50f92");
        const actualData= await res.json();
        console.log(actualData)
        setNews(actualData.articles);
      } 
      catch(error){
          console.log(error);
      }
   }
    useEffect(()=>{
        getSportsData();
    },[])
    return (
        <div className="container border  my-3 border-success">
            <div className="row ">
                <h1 className=" text-center border-bottom ">BBC Live News Portal</h1>
                 {data.map((CurrElement , ind)=>(
                      <NewsCard 
                        key={ind}
                        source={CurrElement.urlToImage}
                        title={CurrElement.title}
                        subTitle={CurrElement.author}
                        description={CurrElement.description}
                        readMore={CurrElement.url}/>
                       
                        ))}
               
           </div>
     </div>
    )
}
export default Sample;
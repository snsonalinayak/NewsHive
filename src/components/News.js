import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";


const News  =(props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)
  // document.title= `NewsHive - ${this.capitalizeFirstLetter(props.category)}`
   
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() +string.slice(1);
  }



const  updateNews=async()=>{
  props.setProgress(0);
  const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props?.apiKey}&page=${page}&pagesize=${props.pageSize}`;
  setLoading(true)
  let data= await fetch(url);
  props.setProgress(35);
  let parsedData= await data.json();
  props.setProgress(75);
  console.log(parsedData);
  setArticles(parsedData.articles);
  setTotalResults(parsedData.totalResults);
  setLoading(false)
  
    props?.setProgress(100);
}
useEffect(() => {
updateNews();
  
}, [])



  // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=683dbc953f0c4fbcb1c4f98c586e8f40&page=1&pagesize=${props.pageSize}`;
  // this.setState({loading:true })
  // let data= await fetch(url);
  // let parsedData= await data.json();
  // console.log(parsedData);
  // this.setState({
  //   articles: parsedData.articles,
  //   totalResults:parsedData.totalResults,
  //   loading:false
  //   })


const handlePrevClick= async()=>{
  // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=683dbc953f0c4fbcb1c4f98c586e8f40&page=1&pagesize=${props.pageSize}`;
  // this.setState({loading: true});
  // let data= await fetch(url);
  // let parsedData= await data.json();
  // console.log(parsedData);

  // this.setState({
  //   articles: parsedData.articles,
  //   page:this.state.page -1,
  //   loading: false
  // })
setPage(page-1)
  updateNews()
}

const handleNextClick= async()=>{

  // if(this.state.page+1> Math.ceil(this.state.totalResults/props.pageSize)){
    
  // }
  // else{

  //   let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=683dbc953f0c4fbcb1c4f98c586e8f40&page=${this.state.page +1}&pagesize=${props.pageSize}`;
  //   this.setState({loading: true});
  //   let data= await fetch(url);
  //   let parsedData= await data.json();

  //   this.setState({
  //     articles: parsedData.articles,
  //     page:this.state.page +1,
  //     loading: false
  //   })
  // }
setPage(page+1)
updateNews()
}

const fetchMoreData = async() => {
  setPage(page+1)
 const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1}&pagesize=${props.pageSize}`;

 let data= await fetch(url);
 let parsedData= await data.json();
 console.log(parsedData);
 setArticles(articles.concat(parsedData.articles));
 setTotalResults(parsedData.totalResults);
};



    return (
    <>
        <div className="container">

        <h2  style={{marginTop:"90px"}}>NewsHive - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        </div>
        {loading && <Spinner/>}

      <InfiniteScroll
          dataLength={articles?.length}
          next={fetchMoreData}
          hasMore={articles?.length!== totalResults}
          loader={<Spinner/>}
          style={{overflow:"hidden"}}
        >
        <div className="container">

        <div className="row ">
        { articles?.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                  {/* <NewsItem  title={element.title?.length>72?element.title?.slice(0,72)+"...":element.title} description={element.description?.length>100?element.description?.slice(0,100)+"...":element.description} imageUrl={element.urlToImage}
                newsUrl={element.url}/> */}
                <NewsItem  
                title={element?.title?element?.title?.slice(0,70)+ "...":""} 
                description={element?.description?element?.description?.slice(0,70)+"...":""} 
                imageUrl={element?.urlToImage} 
                newsUrl={element?.url}
                author={element.author?element.author:"Unknown"}
                date={element.publishedAt}
                source={element.source.name }
                />
              </div>
          }) }
        </div>

        </div>
      
          {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-warning text-light">&larr; Previous</button>
                    <button type="button" disabled={this.state.page+1> Math.ceil(this.state.totalResults/props.pageSize)} onClick={this.handleNextClick} className="btn btn-warning text-light">Next &rarr;</button>
          </div> */}

          </InfiniteScroll>
      </>
    )

}
News.defaultProps ={
  country: "in",
  pageSize: 9,
  category:"general"
}

News.propTypes ={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News

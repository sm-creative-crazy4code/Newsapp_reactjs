import React, { Component, isValidElement } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
 static defaultProps={
  country:"in",
  pageSize:6,
  category: "general"
 }

 static propTypes={
  country:PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string
 }



  constructor(props){
    
  super(props);
    console.log("hello i am a constructor");
    this.state = {
      articles:[],
      loading:false,
      page:1,
      totalResults:0
    }
    document.title =` NewsX: ${this.props.category}`
  } 


async updateNews(){
  this.props.setProgress(10);
  let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading: true});
   this.props.setProgress(30);
   let data=  await fetch(url);
   let parseData =  await data.json();
   this.props.setProgress(70);
   console.log(parseData);
   this.setState({articles:this.state.articles.concat(parseData.articles), 
    totalResults:parseData.totalResults,
    loading:false})
    this.props.setProgress(100);
  // this.setState({articles:parseData.articles})
}
fetchMoreData=()=>{
  this.setState({
   page: this.state.page+1,})
   this.updateNews()


}









 async componentDidMount(){
  this.props.setProgress(0);
   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading: true});
   let data=  await fetch(url);
   let parseData =  await data.json();
   console.log(parseData);
   this.setState({
    articles:this.state.articles.concat(parseData.articles), 
    totalResults:parseData.totalResults,
    
    loading:false})
    this.props.setProgress(100);
  }

//   handelNextClick= async()=>{
  
// //   if(!(this.state.page+1> Math.ceil (this.state.totalResults/this.props.pageSize))){

    
// //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.prps.category}&apiKey=${this.state.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
// //   this.setState({loading: true})
// //   let data=  await fetch(url);
// //   let parseData =  await data.json();
  
// //   // this.setState({articles:parseData.articles})

// //  this.setState({
// //   page: this.state.page+1,
// //   articles:parseData.articles,
// //   loading: false
// //  })
// this.setState({
//   page: this.state.page+1,
//   })
//   this.updateNews()

// }


// handelPreviousClick= async()=>{
// //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.prps.category}&apiKey=${this.state.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
// //   this.setState({loading: true});
// //   let data=  await fetch(url);
// //   let parseData =  await data.json();
// //   console.log(parseData);
// //   // this.setState({articles:parseData.articles})

// //  this.setState({
// //   page: this.state.page-1,
// //   articles:parseData.articles,
// //   loading: false
  
// //  })
// this.setState({
//   page: this.state.page-1,

// })
// this.updateNews()
// }





render() {
    return (
      <>
        <h1 className='text-center'>Todays Top Headlines</h1>
      { this.state.loading && <Spinner/>}

      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader= { <Spinner/>}>
        <div className='container'>

        
          <div className='row'>
        { this.state.articles.map((element)=>{

        return<div className='col-md-4' key={element.url}>
             <Newsitem   title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
           
        })}
          
        </div>
        </div>

        </InfiniteScroll>

       
 

  </> 
    )


  }

}
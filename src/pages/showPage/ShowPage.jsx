import React from 'react'
import Row from '../../components/Row/Row'
import api from "../../api/api"
import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'
const ShowPage = () => {
  return (
    <div>
    
    <Nav/> 
     <Banner fetchUrl={api.fetchNetflixOriginals} />
     <Row title="NETFLIX ORIGINALS" fetchUrl={api.fetchNetflixOriginals} isLargeRow/>
     <Row title="Trending Now" fetchUrl={api.fetchTrending} />
     <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={api.fetchActionMovies} />
     <Row title="Comedy Movie" fetchUrl={api.fetchHorrorMovies} />
     <Row title="Romance Movie" fetchUrl={api.fetchRomanceMovies} />
     <Row title="Documentaries" fetchUrl={api.fetchDocumentaries} />
    
    </div>
  )
}

export default ShowPage

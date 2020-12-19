import Head from 'next/head'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import SearchInput from '../components/SearchInput/SearchInput'
import CountriesTable from '../components/CountriesTable/CountriesTable'


export default function Home({countries}) {
  console.log(countries)

  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter((country) => 
  country.name.toLowerCase().includes(keyword) || 
  country.region.toLowerCase().includes(keyword) ||
  country.subregion.toLowerCase().includes(keyword))

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }

  return (
    <Layout>
      <div className={styles.counts}>
        Found {filteredCountries.length} countries

        <SearchInput placeholder="Filter by name, region, or subregion" onChange={onInputChange}/>

        < CountriesTable countries = {
          filteredCountries
        }
        />
      </div>
    </Layout>
  )
}


export const getStaticProps = async() => {

  const rest = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await rest.json();

  return {
    props: {
      countries
    }
  }
}

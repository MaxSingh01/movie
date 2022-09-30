import { Button, Tab, Tabs, TextField } from "@material-ui/core";
import React from "react";
import { auth } from "../../service/Firebase";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { StylesProvider } from "@material-ui/core/styles";
import "./Search.css";
import SingleCard from "../../components/SingleCard/SingleCard";
import CustomPagination from "../../components/Pagination/CustomPagination";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Search = ({setUser}) => {
  const [type, setType] = useState(0);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setcontent] = useState([]);

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setcontent(data.results);
      setNumOfPages(data.total_pages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(type);
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <StylesProvider injectFirst>
        <div className="search">
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            type="submit"
            onClick={() => auth.signOut()}
          >
            <ExitToAppIcon fontSize="large"/>
          </Button>
        </div>
        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: "white",
            },
          }}
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          className="tabs"
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search Series" />
        </Tabs>
      </StylesProvider>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;

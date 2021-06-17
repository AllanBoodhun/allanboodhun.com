import React from "react";
import WORKS from '../portfolio/works';
import CardList from "../card-list/card-list.component";


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      filterList: [
        {
          id: 11,
          name: "Web Design",
          value: "web_design"
        },
        {
          id: 12,
          name: "Charte Graphique",
          value: "charte graphique"
        },
        {
          id: 13,
          name: "développement",
          value: "développement"
        }
      ],
      searchLists: WORKS,
      activeFilter: []
    };
  }

  onFilterChange(filter) {
    const { filterList, activeFilter } = this.state;
    if (filter === "ALL") {
      if (activeFilter.length === filterList.length) {
        this.setState({ activeFilter: [] });
      } else {
        this.setState({ activeFilter: filterList.map(filter => filter.value) });
      }
    } else {
      if (activeFilter.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
        this.setState({ activeFilter: newFilter });
      } else {
        this.setState({ activeFilter: [...activeFilter, filter] });
      }
    }
  }

  render() {
    const { filterList, activeFilter } = this.state;
    let filteredList;
    // const tag
    if (
      activeFilter.length === 0 ||
      activeFilter.length === filterList.length
    ) {
      filteredList = this.state.searchLists;
    } else {
      filteredList = this.state.searchLists.filter(item =>
        this.state.activeFilter.includes(item.tags)
      );
    }
    return (
      <div className="searchContainer">
        <form>
         
          {this.state.filterList.map(filter => (
            <React.Fragment>
              <label htmlFor={filter.id}>{filter.value}</label>
              <input
                id={filter.id}
                type="checkbox"
                checked={activeFilter.includes(filter.value)}
                onClick={() => this.onFilterChange(filter.value)}
              />
            </React.Fragment>
          ))}
        </form>
        <CardList works={filteredList} />
      </div>
    );
  }
}

export default Search;

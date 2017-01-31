import React, { Component } from 'react';

import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';


class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            loading: false,
            results: [],
            search: '',
            queried: false
        }
    }

    onSubmit(value) {
        this.setState({login:true});

        console.log("submit" + value);

        setTimeout(()=>{
            this.setState({loading:true,
                        queried: true,
                        results: this.stubData()
                    });
        }, 2000);
    }

    stubData(){
        let repo= {
            full_name: 'My Repository',
            owner: {
                login:'Rainer',
                avatar_url:'https://avatars1.githubusercontent.com/u/16125100?v=3&s=400',
                html_url:'https://github.com/ston3',
            },
            stargazers_count:10,
            forks_count:5
        }
    return [
        Object.assign({}, repo),
        Object.assign({}, repo),
        Object.assign({}, repo),
        Object.assign({}, repo),
        Object.assign({}, repo),
        Object.assign({}, repo),
        Object.assign({}, repo),
        Object.assign({}, repo),
        Object.assign({}, repo),
        Object.assign({}, repo)
        ]
    }

    render() {
        return <main className='container'>
            <Header></Header>
            <SearchForm onSubmit= {this.onSubmit} search={this.state.search}></SearchForm>
            <h1>Búsqueda</h1>
        </main>
    }
}

export default SearchContainer;
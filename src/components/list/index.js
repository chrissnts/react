import React from "react";

export default class List extends React.Component{
    state = {
        movies:[
            {
                id: 1,
                name: "Psycho",
                director: "Hitchcock",
                },
                {
                id: 2,
                name: "The Prestige",
                director: "Christopher Nolan",
                },
                {
                id: 3,
                name: "Seven",
                director: "David Fincher",
                },
                {
                    id: 4,
                    name: "Django",
                    director: "Quentin Tarantino",
                }
        ]
    }

    render(){
        return(
            <div style={{marginTop: "10px"}}>
                {

                    this.state.movies.map( mov => (
                        <div key={mov.id}>
                            <h2>{mov.name}</h2>
                            <h4>{mov.director}</h4>
                        </div>
                    ))

                }
            </div>
        )
    }
}
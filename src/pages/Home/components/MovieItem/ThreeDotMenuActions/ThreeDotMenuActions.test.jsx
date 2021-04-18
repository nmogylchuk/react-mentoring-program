import React from 'react';
import rerender from 'react-test-renderer';
import ThreeDotMenuActions from "./ThreeDotMenuActions";

describe('when Three Dot Menu Actions', () => {

    const movie = {
        "id": 447365,
        "title": "Guardians of the Galaxy Vol. 3",
        "tagline": "",
        "vote_average": 0,
        "vote_count": 9,
        "release_date": "2020-05-01",
        "poster_path": "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
        "overview": "The third film based on Marvel's Guardians of the Galaxy.",
        "budget": 0,
        "revenue": 0,
        "genres": [
            "Action",
            "Adventure",
            "Science Fiction"
        ],
        "runtime": null
    }

    test('then snapshot created', () => {
        const threeDotMenuActionsComponent = rerender.create(<ThreeDotMenuActions movie={movie}/>);
        const tree = threeDotMenuActionsComponent.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
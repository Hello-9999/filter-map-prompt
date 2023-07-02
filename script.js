

//                                                                      MOVIES WEBSITE



       
const movies =[

  {
    "title": "hello",
    "year": 2022,
    "genres": [
      {
        "name": "The Godfather",
        "classification": {
          "main": "Action",
          "sub": ["Thriller", "Adventure"]
        }
      },
      {
        "name": "The Dark Knight",
        "classification": {
          "main": "Drama",
          "sub": ["Romance"]
        }
      }
    ],
    "actors": [
      {
        "name": "Actor 1",
        "role": "Protagonist"
      },
      {
        "name": "Actor 2",
        "role": "Antagonist"
      }
    ]
  },

  {
    "title": "Movie B",
    "year": 2019,
    "genres": [
      {
        "name": "The Matrix",
        "classification": {
          "main": "Science Fiction",
          "sub": ["Thriller"]
        }
      },
      {
        "name": "Jurassic Park",
        "classification": {
          "main": "Mystery",
          "sub": ["Suspense"]
        }
      }
    ],
    "actors": [
      {
        "name": "Actor 3",
        "role": "Main Character"
      },
      {
        "name": "Actor 4",
        "role": "Supporting Character"
      }
    ]
  }
]       


const moviesObj = {

  status : true,
  mesage : 'Movies found  !! ',
  data : movies,
}
const movieError ={

  status:false,
  mesage:'Movies not found !!',
}


let findmovieName;
findmovieName = prompt("Enter a movies name || Movies Available : 1) The Godfather , 2) The Dark Knight , 3) The Matrix , 4) Jurassic park " );

let findmovieSub ;
// findmovieSub = prompt ("Which type of Movies you want");


let movieFound = false;

const  movie = moviesObj.data.filter((movieArray)=>{
  // console.log(movieArray)

  // console.log(movieArray)
  // console.log(movie)
  // console.log(movieSubject)


 movieArray.genres.map((mName)=>{

    let movieSubject;

    movieSubject = mName.classification.sub.map((msub)=>{
      // console.log(msub)
      return msub;

    });


    if(mName.name === findmovieName){

      movieFound= true;
      console.log(mName.name , "  ", moviesObj.mesage,movieSubject ) ;
      
    }

    return (mName);
    
  })

  return(movieArray)
});
if(!movieFound){
  console.log('movie not found')
}
// console.log(movie)

    





              

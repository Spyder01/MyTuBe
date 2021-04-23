 var key = 'movie_1'
 const movies = {
     movie_1: {
         Name: "The Shawshank Redemption",
         Genre: "Drama And Inspiring",
         Source: "https://drive.google.com/file/d/1E6XsSYRwj6yyj2cgdge0kbPSXInE4yiK/preview",
         Thumbnail: "Images\Movies\Shawshank.png",
         Gif: "https://giphy.com/embed/l0HU2sYgCZh3HiKnS",
     },
     movie_2: {
         Name: "When Harry Met Sally",
         Genre: "Feel Good and RomCom",
         Source: "https://drive.google.com/file/d/1BZRKuSIUiCUIN-KRkDsXDPD1LssdXIxj/preview",
         Thumbnail: "Images\Movies\WHMS.png",
         Gif: "https://giphy.com/embed/i03KZ8BT6hXrySKUi5",
     },
     movie_3: {
         Name: "Oh My Kadavule",
         Genre: "RomCom",
         Source: "https://drive.google.com/file/d/1lFASIXZkyx8D_fXBE96Oa8BOLm1g1YgF/preview",
         Thumbnail: "Images\Movies\Kadavule.png",
         Gif: "https://giphy.com/embed/dMYVHzANYb9p6",
     },
     movie_4: {
         Name: "Secret Window",
         Genre: "Thriller and Mystery",
         Source: "https://drive.google.com/file/d/1ypEws-s0VPtAbcrnLNrFZxHvsAxP5Xtg/preview",
         Thumbnail: "Images\Movies\Secret_Window",
         Gif: "https://giphy.com/embed/6YV2Nhv9HpyTu",
     },
     movie_5: {
         Name: "Gerald's Game",
         Genre: "Horror, mystery and thriller",
         Source: "https://drive.google.com/file/d/1qB1szZ3Oqj4sNvQYTGVj6bXvo6iZ5XVG/preview",
         Thumbnail: "Images\Movies\Geralds_Game",
         Gif: "https://giphy.com/embed/6YV2Nhv9HpyTu",
     },
     movie_6: {
         Name: "Dolores Claiborne",
         Genre: "Drama, Suspense and Mystery",
         Source: "https://drive.google.com/file/d/1xIZsjYhAKpAbdIyCs6yZXVBNWQzhdxe_/preview",
         Thumbnail: "Images\Movies\Dolores",
         Gif: "https://giphy.com/embed/Z21HJj2kz9uBG",
     },

 }


 app = Vue.createApp({
     data() {
         return {
             Name: "The Shawshank Redemption",
             Genre: "Drama And Inspiring",
             Source: "https://drive.google.com/file/d/1E6XsSYRwj6yyj2cgdge0kbPSXInE4yiK/preview",
             Thumbnail: "Images\Movies\Shawshank.png",
             Gif: "https://giphy.com/embed/l0HU2sYgCZh3HiKnS",
         }
     },
     methods: {
         getMovie(id) {
             console.log(id)
             key = id

             const { Name, Genre, Source, Thumbnail, Gif } = movies[id]
             this.Name = Name
             this.Genre = Genre
             this.Source = Source
             this.Gif = Gif
             this.Thumbnail = Thumbnail



         }
     }


 })

 app.mount("#app")


 window.onload = app[methods].getMovie('movie_2')
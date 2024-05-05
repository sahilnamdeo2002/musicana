body{
    background-color: rgb(60, 142, 60);
}
*{
    /* align-items: center; */
    /* text-align: center; */
    margin: 0;
    padding: 0;
}

nav{
    /* font-family; */
}
nav ul{
    display: flex;
    align-items: center;
    list-style-type: none;
    height: 65px;
    background-color: black;
    color: white;
}
.brand img{
    width: 44px;
    padding: 0 8px;
    border-radius: 100%;

}

.brand{
    display: flex;
    align-items: center;
    font-size: 1.4em;
    font-weight: bolder;
  
}
nav ul li{
    /* margin-left: 20px; */
    /* margin- */
    padding: 0 12px;
}
.container{
    min-height: 70vh;
    background-color: black;
    color: white;
    display: flex;
    margin: 23px auto;
    width: 70%;
    border-radius: 12px;
    padding: 34px;
    background-image: url('bg.jpg');
    /* background-image: none; */
}
.bottom{
    position: sticky;
    height: 130px;
    background-color: black;
    bottom: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

#myProgressBar{
    width: 80vw;
    /* width: auto; */
    text-align: center;
    margin: 12px 0;
    cursor:pointer;

}
.icons{
    color: white;
    margin: 14px;

}
.icons i{
    cursor: pointer;
}
.songitem{
height: 45px;
display: flex;
background-color: white;
color: black;
margin: 12px 0 ;
justify-content: space-between;
align-items: center;
border-radius: 34px;

    
}
.songitem img{
    width: 45px;
    margin:  0 23px;
    border-radius: 34px;
    
}
.timestamp{
    margin: 0 23px;
    /* width: 50px; */
    /* opacity: 1; */
    
}
.timestamp i{
    cursor: pointer;
}
.songitemcontainer{
    margin-top: 74px;
}
.songinfo{
    position: absolute;
    left: 0;
    margin-left: 0px;
    left: 10vw;
}
.songinfo img{
    opacity: 0;
    transition: opacity 0.4s ease-in;
}
/* .songname{
    
} */

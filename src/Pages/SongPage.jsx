import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FooterComponent from '../Components/Footer';
const SongPage = () => {
  let navigate=useNavigate();
    let location=useLocation();
    let songdata=location.state.x;
    // console.log(songdata.songs);
   

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Change this to set how many items you want per page

  // Calculate total pages
  const totalPages = Math.ceil(songdata.songs.length / itemsPerPage);

  // Get the songs for the current page
  const indexOfLastSong = currentPage * itemsPerPage;
  const indexOfFirstSong = indexOfLastSong - itemsPerPage;
  const currentSongs = songdata.songs.slice(indexOfFirstSong, indexOfLastSong);

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    
   
    
  return (
  <>
  <nav id="spnav">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAkCAYAAADSO4eRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ/SURBVHgB5VnhedowED2c/i9NBsCZoDBBnAlCJ4g7QekEkAmaTICZIM0EOBNAJkATBBZI3HdwIoeQwRhIoHnfd0jySSf7dHc6iQoVQBU4OTmJsiy74CbKUFiTSqXyBBq+vLykE4COGJVVTOigHgTBNaoxN2k9ktfX1xvoxNARwqsMtgQooY1qy8OeCDFC8uP2+fn5Nx0ZlpQBPYRQRJ/Uh8ItUtADqn/dVWfrQVGHq7RBoWIZWMnlMVnJgjJcRUABBvQTH5RSAWB87CjlqBQyV4bHInr4kNamQZHlQBl/QE15xAppHFVwPT097YIyoYS2BMtQ8rp0BJhaBlYzEquYusZ4PD6nLcFBGNYxsC4j7pLSASPgH+QQbfsAyrikHYDdguONbXMsoQNHwD6Ol46knewy2LElQAkp11FGbIF0wIB3BLFtwJR7tGMgM71Rk0V0wAiwYhdSn+zJp4ckSRossE57BuaIQV2hcJOxX+wADpxnZ2csKISFcHI1zJlsmmRJ01g3cCFBOQKfcxVWBgfU77QF5F1jUMJyPfyu8C3Y0g0Vhdr+XGq5LwLqZ8sYuSuAse08ubQFZC7G2MNrqncag+43tYxgBU/vMCEK3nojTz/mDRwXiKkEWIaYOVPV4VXpLSGsunzn3RqwnB8+61mFVcrQk7XVi7DJc1Dkg5hRfe9V/5DKgbPWrtBXzcCH2XkNzy1tDeuCk02VYPFlXQflpxYNOxl4CYoBzT6e3YjPJgntCZDdQdFZ06102h8U6BOr+kLgktW5U/xrKgnJdWrqUYOfaXcQN4pUXjR1H2nrfvM+vjG58lYE0EwG9FVg8gms6sBVRGaOMvIQqT4jG7SdD/dhJPxb9azuzDmW59OjSBHL0AKWtluxDiNNVkyNysHQookbKrYtTjz99NhUPY9sRRRjrYnvagopY25+nqClJ7f4RiUA2Xw41C7HOcp5Xh6jxg1lrO1nZJw9Y+nxOs9ZWmRWhqHdIveuFKsxpHeGLGAqzaZizTNvq3BWxq7PI/qOdAFQxh19DB6k1G5sLePRdgpwcdshv0Lsixv7YEU8mJscm22OvB5S/IQ+BqmqX8oOVXd50zwDColxluDj9hXOE6y9R1ESgz8utIJAiZ5F8pCqFoyxLcgzuCe5Ap+v/XofebHDC5TJ+YhmSjCKnVJRQEhLbU19D/+X4se0BTC+o2TVPPyRu7UqXj+PJ3y7xY7UNy30LbKbJPQWA3hPv1YThPT234rZZ/a5A6RShqAr59kUa5XhyTKTbHYi5PODTcUZPVnZDpWHUfWIdovUI/uRygAfmWQFQSWR+bPJmuKPyrqJ08ci1PwibjIFLCRGwRe8e8sVZL93t99SSVwOHlR9WPZ0+64QC2Ha6TWhY3lH8V/O3pAtHtqa9JmhYg6jSp8N2ezOog8afHoX8exQoyznonjttd9/glTKJ9Bt3i7yDwI32xLUo15uAAAAAElFTkSuQmCC" alt="Logo" width="67" height="34"></img>
    <button id="feed">Feedback</button>
    </nav>
    <button id="backhome" onClick={()=>navigate("/")}><i className="fa-solid fa-arrow-left"></i></button>
       
    <div id="spdiv1">
         <img id="pageimg" src={songdata.image} alt="" />
        <div id="songdatamain">
          <h1>Best of {songdata.title} in 2023</h1>
          <p>{songdata.description}</p>
          <div id="songdata">
            <p>{songdata.songs.length}Songs</p>
            <p>{songdata.follows} Follows</p>
          </div>
          <div id="songbuttons">
            <button className="songbutts">
              <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6836 13.6289C21.3789 13.3242 20.8203 13.3242 20.5156 13.6289C20.2109 13.9336 20.2109 14.4922 20.5156 14.7969L23.207 17.4375H17.0625C16.8086 17.4375 16.5547 17.3359 16.4023 17.1328L14.4219 14.543C14.168 14.1875 13.6602 14.0859 13.3047 14.3906C12.9492 14.6445 12.8477 15.1523 13.1523 15.5078L15.082 18.0977C15.5391 18.707 16.25 19.0625 17.0625 19.0625H23.207L20.5156 21.7539C20.2109 22.0586 20.2109 22.6172 20.5156 22.9219C20.668 23.0742 20.8711 23.125 21.125 23.125C21.3281 23.125 21.5312 23.0742 21.6836 22.9219L25.7461 18.8594C26.0508 18.5547 26.0508 17.9961 25.7461 17.6914L21.6836 13.6289ZM17.0625 6.0625H23.207L20.5156 8.75391C20.2109 9.05859 20.2109 9.61719 20.5156 9.92188C20.668 10.0742 20.8711 10.125 21.125 10.125C21.3281 10.125 21.5312 10.0742 21.6836 9.92188L25.7461 5.85938C26.0508 5.55469 26.0508 4.99609 25.7461 4.69141L21.6836 0.628906C21.3789 0.324219 20.8203 0.324219 20.5156 0.628906C20.2109 0.933594 20.2109 1.49219 20.5156 1.79688L23.207 4.4375H17.0625C16.25 4.4375 15.5391 4.84375 15.082 5.45312L6.29688 17.1328C6.14453 17.3359 5.94141 17.4375 5.6875 17.4375H0.8125C0.355469 17.4375 0 17.8438 0 18.25C0 18.707 0.355469 19.0625 0.8125 19.0625H5.6875C6.44922 19.0625 7.16016 18.707 7.61719 18.0977L16.4023 6.41797C16.5547 6.21484 16.8086 6.0625 17.0625 6.0625ZM0.8125 6.0625H5.6875C5.94141 6.0625 6.14453 6.21484 6.29688 6.41797L8.27734 9.00781C8.42969 9.21094 8.68359 9.3125 8.9375 9.3125C9.08984 9.3125 9.24219 9.26172 9.39453 9.16016C9.75 8.90625 9.85156 8.39844 9.54688 8.04297L7.61719 5.45312C7.16016 4.84375 6.44922 4.4375 5.6875 4.4375H0.8125C0.355469 4.4375 0 4.84375 0 5.25C0 5.70703 0.355469 6.0625 0.8125 6.0625Z" fill="white"></path></svg>
              Shuffle
              </button>
            <button className="songbutts">
              <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.625 1.5625C1.625 1.15625 1.98047 0.75 2.4375 0.75H23.5625C23.9688 0.75 24.375 1.15625 24.375 1.5625C24.375 2.01953 23.9688 2.375 23.5625 2.375H2.4375C1.98047 2.375 1.625 2.01953 1.625 1.5625ZM0.8125 4.8125C0.8125 4.40625 1.16797 4 1.625 4H24.375C24.7812 4 25.1875 4.40625 25.1875 4.8125C25.1875 5.26953 24.7812 5.625 24.375 5.625H1.625C1.16797 5.625 0.8125 5.26953 0.8125 4.8125ZM22.9531 7.25C24.6289 7.25 25.8984 8.72266 25.7461 10.3984V10.5508C25.543 10.5508 25.3398 10.5 25.1875 10.5C24.832 10.5 24.4766 10.5508 24.1211 10.6016L24.1719 10.2461C24.2227 9.53516 23.6641 8.875 22.9531 8.875H2.99609C2.28516 8.875 1.72656 9.53516 1.77734 10.2461L3.04688 24.0586C3.09766 24.668 3.65625 25.125 4.26562 25.125H18.2812C18.7891 25.7852 19.3477 26.293 20.0078 26.75H4.26562C2.79297 26.75 1.57422 25.6328 1.42188 24.2109L0.203125 10.3984C0.0507812 8.72266 1.32031 7.25 2.99609 7.25H22.9531ZM13 10.5C15.4375 10.5 17.6719 11.4141 19.1953 12.8359C18.7891 13.1914 18.3828 13.5977 18.0781 14.0039C16.9609 12.9375 15.1836 12.125 13 12.125C9.03906 12.125 6.5 14.6641 6.5 17C6.5 19.3867 9.03906 21.875 13 21.875C14.2695 21.875 15.4375 21.6211 16.4023 21.1641C16.5039 21.7227 16.6562 22.2305 16.8594 22.7383C15.6914 23.2461 14.3711 23.5 13 23.5C8.48047 23.5 4.875 20.6055 4.875 17C4.875 13.4453 8.48047 10.5 13 10.5ZM11.7812 17.2031C11.7812 16.6445 12.2891 16.1875 13 16.1875C13.6602 16.1875 14.2188 16.6445 14.2188 17.2031C14.2188 17.7617 13.6602 18.2188 13 18.2188C12.2891 18.2188 11.7812 17.7617 11.7812 17.2031ZM26 18.625H28.4375C28.8438 18.625 29.25 19.0312 29.25 19.4375C29.25 19.8945 28.8438 20.25 28.4375 20.25H26V22.6875C26 23.1445 25.5938 23.5 25.1875 23.5C24.7305 23.5 24.375 23.1445 24.375 22.6875V20.25H21.9375C21.4805 20.25 21.125 19.8945 21.125 19.4375C21.125 19.0312 21.4805 18.625 21.9375 18.625H24.375V16.1875C24.375 15.7812 24.7305 15.375 25.1875 15.375C25.5938 15.375 26 15.7812 26 16.1875V18.625ZM32.5 19.4375C32.5 23.5 29.1992 26.75 25.1875 26.75C21.125 26.75 17.875 23.5 17.875 19.4375C17.875 15.4258 21.125 12.125 25.1875 12.125C29.1992 12.125 32.5 15.4258 32.5 19.4375ZM25.1875 13.75C22.0391 13.75 19.5 16.3398 19.5 19.4375C19.5 22.5859 22.0391 25.125 25.1875 25.125C28.2852 25.125 30.875 22.5859 30.875 19.4375C30.875 16.3398 28.2852 13.75 25.1875 13.75Z" fill="#34C94B"></path></svg>
              Add to library
            </button>
          </div>
        </div>
    </div>


    <div id="pagination">
    <div id="pagdiv">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>.
      
      
      
      
      <table>
        
        <thead>
          <tr id="thead">
            <th>Title</th>
            <th>Artist</th>
            <th>Duration</th>
          </tr>
        </thead>
        
        59m <tbody>
        {currentSongs.map((song, index) => {
        const { title, artists, durationInMs,image } = song;
        const minutes = Math.floor(durationInMs / 60000);
        const seconds = ((durationInMs % 60000) / 1000).toFixed(0);
        const formattedDuration = `${minutes} min ${seconds < 10 ? '0' : ''}${seconds} sec`;

        return (
          <tr key={index}>
            <td><img id="tableimg"src={image} alt="image" width="59" height="64" /> {title}</td>
            <td>{artists[0]}</td>
            <td>{formattedDuration}</td>
          </tr>
        );
      })}
      </tbody>
      </table>

      
    </div>
    
    
    
    
    <FooterComponent/>
    </>
  )
}

export default SongPage

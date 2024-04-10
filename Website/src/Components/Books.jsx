import React from 'react'

const Books = () => {
  const bookData = [
    { Name: '5AM Club', Rating: '7/10', Category: 'Motivation', CoverImage: 'https://1.bp.blogspot.com/-VGGtIGtRGls/X4BlL7FceOI/AAAAAAAAA-w/tvSDqOUCqz4uaGjqpi7cczVNX53Yqg5EQCLcBGAsYHQ/s2048/105c325e-4061-4fad-81a9-6404f4ad5d99_IMG_7841.jpeg' },
    { Name: 'Rich Dad Poor Dad', Rating: '8', Category: 'Mindset', CoverImage: 'https://th.bing.com/th/id/OIP.cXos383-7ZwRWEC0k86RpwHaHa?rs=1&pid=ImgDetMain' },
    { Name: 'The Art of Happiness', Rating: '8', Category: 'Spritual', CoverImage: 'https://th.bing.com/th/id/OIP.ulJTnETEiblQo2JH8I-HfwHaK5?rs=1&pid=ImgDetMain' },
    { Name: 'Zero to One', Rating: '7', Category: 'Business', CoverImage: 'https://th.bing.com/th/id/OIP.ns2sIngZP1YpOkt9KDyE5AHaEo?rs=1&pid=ImgDetMain' },
    { Name: 'The Lean Startup', Rating: '8', Category: 'Business', CoverImage: 'https://netsavvies.com/wp-content/uploads/2019/07/Book-Cover-1.jpg' },
    { Name: 'The Power of Now', Rating: '7', Category: 'Spritual', CoverImage: 'https://th.bing.com/th/id/OIP.JcB1wXlq7QyuK0y1c4-PmgHaLC?rs=1&pid=ImgDetMain' },
    { Name: 'The Power of Now', Rating: '7', Category: 'Spritual', CoverImage: 'https://th.bing.com/th/id/OIP.JcB1wXlq7QyuK0y1c4-PmgHaLC?rs=1&pid=ImgDetMain' },
    { Name: 'The Power of Now', Rating: '7', Category: 'Spritual', CoverImage: 'https://th.bing.com/th/id/OIP.JcB1wXlq7QyuK0y1c4-PmgHaLC?rs=1&pid=ImgDetMain' },

  ]
  return (
    <>
      <h1 className='text-center m-2 p-2'>This Page is about Books.</h1>
      <div className='container'>
        <div className='row'>
          {
            bookData.map((items) => {
              return (
                <div className='col-md-3'>
                  {/* card component starts here */}
                  <div className="card mb-3" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={items.CoverImage} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{items.Name}</h5>
                          <p className="card-text">Rating : {items.Rating}</p>
                          <p className="card-text"><small className="text-body-secondary">Catergory : {items.Category}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Books
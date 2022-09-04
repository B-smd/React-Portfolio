import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardLink
} from 'mdb-react-ui-kit';

export default function ProjectCard(props) {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4 text-center'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={`${process.env.PUBLIC_URL}/img/project1.jpeg`}
            alt='Life Stories'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Life Stories</MDBCardTitle>
            <MDBCardText>
            The user can share their story to encourage another. I used MongoDB as a backend use Graphql to connect react with the help of Apollo client. For authentication used JWT to create a token
            </MDBCardText>
            <MDBCardLink href='https://life-stories-bambang.herokuapp.com/'><img src="https://img.icons8.com/color/48/000000/start--v1.png" alt="start" className="icon" width={"56"}/></MDBCardLink>
            <MDBCardLink href='https://github.com/B-smd/Life-Stories'><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon" width={"56"}/></MDBCardLink>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={`${process.env.PUBLIC_URL}/img/project2.jpeg`}
            alt='Update Portfolio Page 2'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Update Portfolio Page 2</MDBCardTitle>
            <MDBCardText>
            I used a combination of HTML, Css, Bootstrap 4 and Java Script. I also created greyscale, hover zoom out and a video thank you for watching. For the icons, I used vscode extention React icons
            </MDBCardText>
            <MDBCardLink href='https://b-smd.github.io/Updated-Portfolio-Page-2/'><img src="https://img.icons8.com/color/48/000000/start--v1.png" alt="start" className="icon" width={"56"}/></MDBCardLink>
            <MDBCardLink href='https://github.com/B-smd/Updated-Portfolio-Page-2.git'><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon" width={"56"}/></MDBCardLink>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={`${process.env.PUBLIC_URL}/img/project3.jpeg`}
            alt='Password Manager'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Password Manager</MDBCardTitle>
            <MDBCardText>
            For Password Manager as a group of four, we used Node.js, Express.js, Handlebars.js. Also MySQL and the Sequelize ORM for the database. Finally, AES to encrypt and decrypt, MD5 Hashing & Bcryp
            </MDBCardText>
            <MDBCardLink href='https://trapperkeyper.herokuapp.com/'><img src="https://img.icons8.com/color/48/000000/start--v1.png" alt="start" className="icon" width={"56"}/></MDBCardLink>
            <MDBCardLink href='https://github.com/B-smd/UWA-Group-Project-2-Password-Manager.git'><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon" width={"56"}/></MDBCardLink>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={`${process.env.PUBLIC_URL}/img/project4.jpeg`}
            alt='Social Network API'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Social Network API</MDBCardTitle>
            <MDBCardText>
            This is a backend, it allows users to share their thoughts, this allows others to react to a friend's thought and add a friend that uses a NoSQL database. For the database I used MongoDB and Mongoose
            </MDBCardText>
            <MDBCardLink href='https://drive.google.com/file/d/1sYy2-N2PWscdo6kuxTpS0x486FufqPpf/view'><img src="https://img.icons8.com/color/48/000000/start--v1.png" alt="start" className="icon" width={"56"}/></MDBCardLink>
            <MDBCardLink href='https://github.com/B-smd/Social-Network-API.git'><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon" width={"56"}/></MDBCardLink>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={`${process.env.PUBLIC_URL}/img/project5.jpeg`}
            alt='Employee Tracker'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Employee Tracker</MDBCardTitle>
            <MDBCardText>
            This is content management system (CMS) to manage a company's employee database. A command-line application to manage a company's database, using Node.js, Inquirer and MySQL
            </MDBCardText>
            <MDBCardLink href='https://drive.google.com/file/d/1VsD51oFTYQh9YmbeghLuB1HGBdEMqj--/view'><img src="https://img.icons8.com/color/48/000000/start--v1.png" alt="start" className="icon" width={"56"}/></MDBCardLink>
            <MDBCardLink href='https://github.com/B-smd/Employee-Tracker.git'><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon" width={"56"}/></MDBCardLink>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src={`${process.env.PUBLIC_URL}/img/project6.jpeg`}
            alt='BCKS Porjects'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BCKS Project</MDBCardTitle>
            <MDBCardText>
            As a group of four, we created Currency Convertor, Cost of living while you travel, Current see and Cat and Dog. We use HTML, Css and Java Script. We also used API to get the data from the third party
            </MDBCardText>
            <MDBCardLink href='https://b-smd.github.io/BCKS-Project/'><img src="https://img.icons8.com/color/48/000000/start--v1.png" alt="start" className="icon" width={"56"}/></MDBCardLink>
            <MDBCardLink href='https://github.com/B-smd/BCKS-Project.git'><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon" width={"56"}/></MDBCardLink>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}


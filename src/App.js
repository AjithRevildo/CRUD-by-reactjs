import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { AddContactPage } from "./AddContacts";
import { Home } from "./Home";
import { NavBar } from "./NavBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";

function App() {
  const contactList = [
    {
      name: "Ajith Revildo",
      contactNo: "8072481551",
      street: "kakkan street",
      city: "chennai",
      country: "India",
      zip: "600 069",
      mail: "ajithrevildo1999@gmail.com",
      photo: "",
      id: 1,
    },
    {
      name: "Kavitha",
      contactNo: "1-264-371-8422",
      street: "pakkathu street",
      city: "Chennai",
      country: "india",
      zip: "97483",
      mail: "kavi@gmail.com",
      photo: "",
      id: 2,
    },
    {
      name: "Dulquer Salmon",
      contactNo: "858.924.7561",
      street: "Brycen Camp",
      city: "cochin",
      country: "india",
      zip: "66060",
      mail: "DQ@hotmail.com",
      photo: "https://pbs.twimg.com/profile_images/963826845589291009/xx6j6G9R_400x400.jpg",
      id: 3,
    },
    {
      name: "Andrea",
      contactNo: "(912) 561-5464 x83576",
      street: "poes garden",
      city: "chennai",
      country: "india",
      zip: "12577-8031",
      mail: "andrea@yahoo.com",
      photo: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTQV8qg9E-Kn2GamVbK_CilcQhbz1AXIk5QNWi0wLKidHu8MeK-5d6vQQxvreXx",
      id: 4,
    },
    {
      name: "Samantha",
      contactNo: "693.604.8772",
      street: "kurukku street",
      city: "Pallavaram",
      country: "india",
      zip: "44695-3587",
      mail: "samanthaakkinie@gmailmail.com",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Samantha_At_The_Irumbu_Thirai_Trailer_Launch.jpg/1200px-Samantha_At_The_Irumbu_Thirai_Trailer_Launch.jpg",
      id: 5,
    },
  ];
  const [contact, setContact] = useState(contactList);

  const setCon = (newContact) => {
    setContact([...contact, newContact]);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home contact={contact} setContact={setContact} />}
        />
        <Route
          path="/add-contact"
          element={<AddContactPage setCon={setCon} />}
        />
        <Route
          path="/edit-contact/:id"
          element={<EditContact contact={contact} setContact={setContact} />}
        />
      </Routes>
    </div>
  );
}

function EditContact({ contact, setContact }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const cont = contact[id];
  const [name, setName] = useState(cont.name);
  const [contactNo, setContactNo] = useState(cont.contactNo);
  const [mail, setMail] = useState(cont.mail);
  const [street, setStreet] = useState(cont.street);
  const [city, setCity] = useState(cont.city);
  const [country, setCountry] = useState(cont.country);
  const [zip, setZip] = useState(cont.zip);
  const [photo, setPhoto] = useState(cont.photo);
  return (
    <div>
      <NavBar />
      <div className="form-div">
        <TextField
          required
          className="standard-basic"
          label="Full Name"
          defaultValue={cont.name}
          variant="filled"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Phone No."
          defaultValue={cont.contactNo}
          variant="filled"
          onChange={(event) => setContactNo(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Mail ID"
          defaultValue={cont.mail}
          variant="filled"
          onChange={(event) => setMail(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Street"
          defaultValue={cont.street}
          variant="filled"
          onChange={(event) => setStreet(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="City"
          defaultValue={cont.city}
          variant="filled"
          onChange={(event) => setCity(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Country"
          defaultValue={cont.country}
          variant="filled"
          onChange={(event) => setCountry(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Zip Code"
          defaultValue={cont.zip}
          variant="filled"
          onChange={(event) => setZip(event.target.value)}
        />
        <TextField
          className="standard-basic"
          label="Photo URL"
          defaultValue={cont.photo}
          variant="filled"
          onChange={(event) => setPhoto(event.target.value)}
        />
        <Button
          className="buttn"
          variant="contained"
          onClick={() => {
            const updatedCont = {
              name,
              contactNo,
              mail,
              street,
              city,
              country,
              zip,
              photo,
            };
            const contactCopy = [...contact];
            contactCopy[id] = updatedCont;
            setContact(contactCopy);
            navigate("/");
          }}
        >
          <div className="addbtn">SAVE USER</div>
        </Button>
      </div>
    </div>
  );
}

export default App;

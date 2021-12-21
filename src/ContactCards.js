import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function Distributer({ contact, setContact }) {
  return (
    <div className="carddisp">
      {contact.map((cnt, index) => {
        return (
          <ContactCard
            contact={contact}
            name={cnt.name}
            num={cnt.contactNo}
            street={cnt.street}
            city={cnt.city}
            country={cnt.country}
            zip={cnt.zip}
            mail={cnt.mail}
            photo={cnt.photo}
            id={index}
            index={index}
            setContact={setContact}
          />
        );
      })}
    </div>
  );
}
function ContactCard({
  name,
  num,
  street,
  city,
  country,
  zip,
  mail,
  photo,
  id,
  index,
  setContact,
  contact,
}) {
  const navigate = useNavigate();
  const address = `${street}, ${city}, ${country}`;
  return (
    <div>
      <div class="card mb-3" style={{ "max-width": "27rem" }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img className="img" src={photo} alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">Ph.no: {num}</p>
              <p class="card-text">Mail Id: {mail}</p>
              <p class="card-text">
                <small class="text-muted">
                  Address: {address} - {zip}
                </small>
              </p>
            </div>
            <div className="card-action">
              <IconButton
                aria-label="delete"
                color="primary"
                onClick={() => {
                  navigate("/edit-contact/" + id);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  setContact(contact.filter((cnt, index) => index !== id));
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

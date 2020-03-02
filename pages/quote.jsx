import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUploadedImages } from "../redux/quote/quote.selectors";
import { selectSuppliers } from "../redux/supplier/supplier.selectors";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import Userheader from "../components/UserHeader/Userheader";
import Subheader from "../components/Subheader/Subheader";
import ImageUploader from "../components/ImageUploader/ImageUploader";

import "../styles/quote.styles.scss";
import { saveQuoteStart } from "../redux/quote/quote.actions";
import { getSuppliersStart } from "../redux/supplier/supplier.actions";

const Quote = ({ uploadedImages, saveQuote, suppliersData }) => {
  const getImageString = () => {
    const imageStrings = [];
    if (uploadedImages.length > 0) {
      uploadedImages.map(image => {
        imageStrings.push(image["@id"]);
      });
    }
    return imageStrings;
  };
  const [deliveryWay, setDeliveryWay] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [quote, setQuote] = useState({
    suppliers: [],
    description: "",
    images: getImageString()
  });
  useEffect(() => {
    if (quote.description.length !== 0 && quote.suppliers.length !== 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [quote]);

  const { suppliers, description } = quote;

  const handleDeliveryChange = event => {
    setDeliveryWay(event.target.value);
  };

  const handleShopChange = event => {
    setQuote({ ...quote, suppliers: event.target.value });
  };

  const handleQuoteDescriptionChange = event => {
    const desc = event.target.value;
    setQuote({ ...quote, description: desc });
  };
  console.log(suppliersData);

  const saveQuotes = quote => {
    console.log(quote);
    if (quote.description.length !== 0 && quote.suppliers.length !== 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <div className="quote-page">
      <Userheader />
      <Subheader />
      <Container className="quote-page" maxWidth="lg">
        <Typography variant="h5" component="h5" className="quote-header">
          Quote
        </Typography>
        <form id="quote-form">
          <Paper variant="outlined" elevation={3} className="paper">
            <Box className="quote-content">
              <TextareaAutosize
                aria-label="quote description"
                placeholder="Type here..."
                className="quote-text"
                value={description}
                onChange={handleQuoteDescriptionChange}
              />
              <ImageUploader />
            </Box>
            <Box mt={3}>
              <Typography variant="h6" component="h6">
                Send to:
              </Typography>

              <FormControl className="shop-selector-container">
                <InputLabel id="shops-selector" className="shop-selector-label">
                  Shops
                </InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  className="shop-selector"
                  multiple
                  value={suppliers}
                  onChange={handleShopChange}
                  renderValue={selected => selected.join(", ")}
                  input={<Input />}
                >
                  {suppliersData.suppliers["hydra:member"]
                    ? suppliersData.suppliers["hydra:member"].map(supplier => (
                        <MenuItem key={supplier.id} value={supplier["@id"]}>
                          <Checkbox
                            checked={suppliers.indexOf(supplier["@id"]) > -1}
                          />
                          <ListItemText primary={supplier.name} />
                        </MenuItem>
                      ))
                    : null}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl className="deliver-selector-container">
                <InputLabel
                  id="shops-selector"
                  className="delivery-selector-label"
                >
                  Delivery way
                </InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  className="delivery-selector"
                  value={deliveryWay}
                  onChange={handleDeliveryChange}
                >
                  <MenuItem value={1}>
                    <ListItemText primary={"Pickup"} />
                  </MenuItem>

                  <MenuItem value={0}>
                    <ListItemText primary={"Delivery"} />
                  </MenuItem>
                </Select>
              </FormControl>
              {deliveryWay ? (
                <TextField id="pickup-location" label="Pickup location" />
              ) : null}
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-end">
              <Button
                variant="contained"
                className="confirm-btn"
                onClick={() => saveQuotes(quote)}
                disabled={!isValid}
              >
                Confirm
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="cancel-btn"
              >
                Cancel
              </Button>
            </Box>
          </Paper>
        </form>
      </Container>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  saveQuote: quote => dispatch(saveQuoteStart(quote)),
  getSupplierStart: () => dispatch(getSuppliersStart())
});

const mapStateToProps = createStructuredSelector({
  uploadedImages: selectUploadedImages,
  suppliersData: selectSuppliers
});

export default connect(mapStateToProps, mapDispatchToProps)(Quote);

import React, { useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SectionBox from '../components/SectionBox/SectionBox';

import '../styles/index.styles.scss';

const Index = () => {
  useEffect(() => {
    document.body.classList.remove('signin-page');
    document.body.classList.remove('signup-page');
  }, []);
  return (
    <div className='full-width'>
      <Header />
      <div className='section-container'>
        <SectionBox title1='Compare.Request.Choose.Order' title2='Your one stop for all electrical products' bgColor='#0859a0' btnText='Sign Up' otherStyles='section-top' />
        <SectionBox title1='Trusted within the industry' title2='Save time and money by ordering and requesting quotes from the biggest range of electrical wholesalers and products within Australia.' btnText='Find out more' fontColor="#404040" />
        <SectionBox title2={"It is amazing tool I use on a day to day basis. Simplicity and the amount of time saved is curcial for my business. - John Snow"} bgColor='#e9e9f2' fontColor="#404040" />
        <SectionBox title1='Compare Electrical Products:' title2={"Easily find and compare items and prices from the biggest range of electrical products in one location."} bgColor='cayon' otherStyles='text-left section-with-image' imgUrl='/Compare_electrical.png' altText='compare electrical' bgColor="#008ec1" />
        <SectionBox title1='Request Quote:' title2={"Quotes can be sent out to every wholesaler in one click, saving you time from sending the same order out to each individual suppliers."} bgColor='cayon' otherStyles='text-left section-with-image' imgUrl='/request_quote.png' alt='request quote' bgColor="#4db5ca" />
        <SectionBox title1='Reverse Auctions:' title2={"Wholesalers have the option to bid for the lowest price for an order you have requested."} otherStyles='text-left section-with-image' imgUrl='/Reverse_Auction.png' alt='reverse auction' bgColor="#348f49" />
        <SectionBox title1='Order Management:' title2={"Manage all incoming orders, transactions and jobs in one simple platform, giving you the ability to keep track of orders and prices, and easily chase up on any issues you have with your orders."} otherStyles='text-left section-with-image' imgUrl='/OrderManagement.png' alt='order management' bgColor="#fc482c" />
        <SectionBox title1='Order Management:' title2={"Employee Integration: Integrate your employees with this system and manage all of their orders and jobs in one place."} otherStyles='text-left section-with-image' imgUrl='/Employee_Integration.png' alt='employee integration' bgColor="#a3c078" />
        <Typography variant="h4" component="h1" gutterBottom className='title1' className="header-title-blue">
          We differ from other services
        </Typography>
        <div className='flex-grid'>
          <Grid container>
            <Grid item xs>
              <SectionBox title1='Free service with maximum features' title2={"We offer a completely free service with maximum features for all electricians who want a better way to fulfill their orders."} bgColor='cayon' otherStyles='text-left section-with-image' altText='compare electrical' fontColor="#404040" otherStyles='section-box-half' imgUrl='/Free_services.jpg' />
            </Grid>
            <Grid item xs>
              <SectionBox title1='Supplier verification' title2={"We do all the supplier verification so you don't have to worry about things going wrong."} bgColor='cayon' otherStyles='text-left section-with-image' altText='compare electrical' fontColor="#404040" otherStyles='section-box-half' fontColor="#404040" otherStyles='section-box-half' imgUrl='/Supplier_Verification.jpg' />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <SectionBox title1='Best deals' title2={"We offer you the best deals through our business model, giving you the best deals available on the market."} bgColor='cayon' otherStyles='text-left section-with-image' altText='compare electrical' fontColor="#404040" otherStyles='section-box-half' fontColor="#404040" otherStyles='section-box-half' imgUrl='/BestDeals.jpg' />
            </Grid>
            <Grid item xs>
              <SectionBox title1='One account' title2={"Make one account to access credit with all the suppliers."} bgColor='cayon' otherStyles='text-left section-with-image' altText='compare electrical' fontColor="#404040" otherStyles='section-box-half' imgUrl='/One_account.png' />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <SectionBox title1='Scoring System' title2={"We implement a scoring system that determines how much credit you will have access to and the potential for a bigger discount with your order."} bgColor='cayon' otherStyles='text-left section-with-image' altText='compare electrical' fontColor="#404040" otherStyles='section-box-half' fontColor="#404040" otherStyles='section-box-half' imgUrl='/Scoring_system.jpg' />
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </div>

        <div className="footer">
          <SectionBox key='6' title1='Be a part of the future' title2={"Sign up today to access the biggest range of the electrical wholesalers and products within Australia."} otherStyles='text-left footer-with-image' imgUrl='/future.jpg' alt='Be part of future' bgColor="#015a9e" btnText='Sign Up' routeSlug='signup' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;

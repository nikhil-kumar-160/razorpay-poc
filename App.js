/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const handlePayment = () => {
    const options = {
      description: 'Payment for your Hotel Booking',
      image:
        'https://pbs.twimg.com/profile_images/998807533899808768/SBSaSnQi_400x400.jpg',
      currency: 'INR',
      key: 'rzp_test_SkxD7Xpm4bfQBK',
      amount: '245999',
      name: 'fabHotels',
      order_id: 'order_JvDS3XhEXjwCHA',
      prefill: {
        email: 'manudeep.godara@fabhotels.com',
        contact: '9876543210',
        name: 'Manudeep Godara',
      },
      theme: {color: '#0E286A'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        console.log('Payment Success', data);
      })
      .catch(err => console.error('Payment error', err));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="Open Razorpay" onPress={handlePayment} />
    </SafeAreaView>
  );
};

export default App;

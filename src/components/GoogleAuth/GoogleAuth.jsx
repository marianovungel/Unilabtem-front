import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useGoogleOneTapLogin } from '@react-oauth/google';

export default function GoogleAuth() {

useGoogleOneTapLogin({
  onSuccess: credentialResponse => {
    const { email, given_name, picture, sub } = jwtDecode(credentialResponse?.credential);
    console.log({email, given_name, picture, sub});
  },
  onError: () => {
    console.log('Login Failed');
  },
});



  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        const { email, given_name, picture, sub } = jwtDecode(credentialResponse?.credential);
        console.log({email, given_name, picture, sub});
        
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  )
}

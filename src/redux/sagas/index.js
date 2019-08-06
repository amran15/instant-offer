import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';

import fetchListingAnswers from './fetchListingAnswers';

<<<<<<< HEAD
import pdfListing from './pdfListing'
import pdfOffer from './pdfOffer'
import listingCategorySaga from './listingcategorysaga';
// 
=======
import pdfListing from './pdfListing';
import pdfOffer from './pdfOffer';

import deleteListingAnswer from './deleteListingAnswer';
import deletePurchaseAnswerSaga from './deletePurchaseAnswer';

>>>>>>> 28010e862fc90d6a20ffa289fd1f865d8a81d7af

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    fetchListingAnswers(),
    pdfListing(),
    pdfOffer(),
<<<<<<< HEAD
    listingCategorySaga(),
=======
    deleteListingAnswer(),
    deletePurchaseAnswerSaga()
>>>>>>> 28010e862fc90d6a20ffa289fd1f865d8a81d7af
  ]);
}

import firebase from 'react-native-firebase';

// // Set default values
// firebase.config().setDefaults({
//     show_price_input: true,
//     img_home : ''
//   });
firebase.config().enableDeveloperMode();

export default remoteConfig = () => {
    firebase.config().fetch()
        .then(() => firebase.config().activateFetched())
        .then(() => firebase.config().getValues(['img_home', 'a', 'test_input', 'show_price_input']))
        .then((objects) => {
            let data = {};
            // Retrieve values
            Object.keys(objects).forEach((key) => {
                data[key] = objects[key].val();
                // Do something with data
            });
            return data;
        })
        .catch((error) => console.log(`Error processing config: ${error}`))
}

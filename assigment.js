const locations = {
 "66.59": {
   "-105.81":"ROCKY-MOUNTAINS",
   "22.54":"KATERINI-GREECE"
  },
 "28.66": {
   "-105.81":"CHIHUAHUA-MEXICO"
  }
};

function goToSecretLocation(lat, lon, passcode) {
  if (!lat || !lon || !passcode) {
    throw"latitude, longitude, and passcode are required!";
  }

  let result;
  try {
    if (locations[lat][lon] === passcode) {
      result ="Welcome.";
    } else {
      throw"Nothing to see here!";
    }
  } catch (error) {
    if (typeof error ==="string") {
      result = error;
    } else {
      result ="You look around and don't see a thing.";
    }
  }

  return result;
}

goToSecretLocation(66.59,22.54,"ROCKY-MOUNTAINS");
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { useState } from 'react';
import { app } from '../firebase.js';
import { FaTrash } from 'react-icons/fa';

const CreateListing = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [imageUpload, setImageUpload] = useState(false);
  console.log(formData);
  const handleUploadImagesSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 9) {
      setImageUpload(true);
      setImageUploadError(false);
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setImageUpload(false);
        })
        .catch((err) => {
          setImageUploadError('Image upload failed (2 MB max per image)');
          setImageUpload(false);
        });
    } else {
      setImageUploadError('You can only upload 8 images per listing');
      setImageUpload(false);
    }
  };
  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-emerald-900">
        Create a New Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="sell"
                className="w-5"
              />
              <span className="text-emerald-900">Sell</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rent"
                className="w-5"
              />
              <span className="text-emerald-900">Rent</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
              />
              <span className="text-emerald-900">Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
              />
              <span className="text-emerald-900">Furnished</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="offer"
                className="w-5"
              />
              <span className="text-emerald-900">Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="p-2 border border-emerald-300 rounded-lg"
              />
              <p className="text-emerald-900">Beds</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="p-2 border border-emerald-300 rounded-lg"
              />
              <p className="text-emerald-900">Baths</p>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="regularPrice"
                min="1"
                max="10"
                required
                className="p-2 border border-emerald-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p className="text-emerald-900">Regular Price</p>
                <span className="text-emerald-900 text-sm">($ / month)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                id="discountedPrice"
                min="1"
                max="10"
                required
                className="p-2 border border-emerald-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p className="text-emerald-900">Discounted Price</p>
                <span className="text-emerald-900 text-sm">($ / month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold text-emerald-900">
            Images:
            <span className="font-normal text-sm text-emerald-600 ml-2">
              The first imge will be the cover (max 8)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              onChange={(e) => setFiles(e.target.files)}
              className="p-2 border border-emerald-300 rounded-lg w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button
              type="button"
              disabled={imageUpload}
              onClick={handleUploadImagesSubmit}
              className="p-2 text-white bg-emerald-900 rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              {imageUpload ? 'Uploading...' : 'Upload'}
            </button>
          </div>
          <p className="text-red-700 text-sm">
            {imageUploadError && imageUploadError}
          </p>

          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div
                key={url}
                className="flex justify-between p-3 border border-emerald-300 rounded-lg items-center"
              >
                <img
                  src={url}
                  alt="listing image"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75 flex align-items"
                >
                  <FaTrash className="mr-1 sm" />
                  <span>Delete</span>
                </button>
              </div>
            ))}
          <button className="bg-emerald-900 uppercase p-3 rounded-lg text-emerald-100 hover:opacity-95 disabled:opacity-80">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;

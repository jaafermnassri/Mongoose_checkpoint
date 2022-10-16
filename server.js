const express = require("express");
const mongoose = require("mongoose");
const person = require("./models/person");

const app = express();
const port = 5000;

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

// Create and Save a Record of a Model
// const addPerson = async function (req, res) {
//   try {
//     const newPerson = new person({
//       name: "Eren",
//       age: 18,
//       favoriteFoods: ["meat", "rice"]
//     });

//     console.log(newPerson);
//     newPerson.save((err, result) => {
//       if (err) {
//         console.log(err.message);
//       } else {
//         console.log("person saved successfully");
//       }
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addPerson();

// Create Many Records with model.create()
// const createPerson = async function (req, res) {
//   try {
//     let personMany = [
//       { name: "Itadori", age: 28, favoriteFoods: ["Ramen", "Sushi","Burrito"] },
//       { name: "Sakuragi", age: 17, favoriteFoods: ["Burger", "Dango","Burrito"] },
//       { name: "Merueum", age: 20, favoriteFoods: ["People","Animals","Vegetables","Burrito"] },
//       { name: "Hashirama", age: 40, favoriteFoods: ["Salad", "Fruits","Barbeque"] }
//     ];
// const newData = await person.create(personMany);
//     console.log(newData);

//   } catch (error) {
//     console.log(error.message);
//   }
// };
// createPerson();

//Use model.find() to Search Your Database
// const search = async function (req, res) {
//   try {
//     const filtr = await person.find({ name: "Eren" });
//     console.log(filtr);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// search();

//Use model.findOne() to Return a Single Matching Document from Your Database
// const searchOne = async function (req, res) {
//   try {
//     const filtr = await person.findOne({ name: "Hashirama" });
//     console.log(filtr);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// searchOne();


//Use model.findById() to Search Your Database By _id
// const searchById = async function (req, res) {
//   try {
//     const filtr = await person.findById({_id:"634c5129685ca546ecd0be84"});
//     console.log(filtr);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// searchById();



// async function findEditSave("634c5129685ca546ecd0be83", "hamburger"){
//     try {
//         const person = await person.findById({_id : id});
//         await person.favoriteFoods.push(food)
//         await person.save();
//     }catch(err){console.log(err.message)}
// }
// findEditSave();


//Perform New Updates on a Document Using model.findOneAndUpdate()
// async function findOneAndUpdate(pname) {
//     try {
//         const update = await person.findOneAndUpdate({"name":pname},{$set:{"age":20}})
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// findOneAndUpdate("Itadori")

// Delete One Document Using model.findByIdAndRemove
// async function findByIdAndRemove(id) {
//         try {
//             const idrem = await person.findByIdAndRemove({"_id":id})
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//     findByIdAndRemove("634c5129685ca546ecd0be84")

// MongoDB and Mongoose - Delete Many Documents with model.remove()
// async function docRemove(rname) {
//         try {
//             const remv = await person.remove({"name":rname})
//              console.log(remv)
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//     docRemove("Meuruem")

async  function queryChain() {
     try {
    const querySearch =await  person.find({favoriteFoods:"Burrito"}).sort({name : "asc"}).limit(2).select("-age").exec()
    console.log(querySearch)
        }
     catch (error) {
            console.log(error.message)
        }
  };
queryChain()

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
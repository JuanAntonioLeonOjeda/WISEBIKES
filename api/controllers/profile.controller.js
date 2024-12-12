const Profile = require('../models/profile.model')

const createStaffProfileAux = async (email, password, phone, userId) => {
  try {
    const profile = await Profile.create({
      email,
      password,
      phone
    })
    return profile
  } catch (error) {
    console.error(error)
    throw new Error('Error creating Staff Profile')
  }
}
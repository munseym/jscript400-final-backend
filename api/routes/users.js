const router = require('express').Router()
const User = require('../models/user')
const { isLoggedIn, isSameUser } = require('../middleware/auth')
const { validate } = require('../middleware/users')

const excludeKeys = '-__v -password'

router.get('/', isLoggedIn, async (req, res, next) => {
  const status = 200
  const response = await User.find(req.query).select(excludeKeys)
  res.json({ status, response })
})

router.get('/:userId', isLoggedIn, async (req, res, next) => {
  const status = 200
  const response = await User.findById(req.params.userId).select(excludeKeys)
  res.json({ status, response })
})

router.put('/:userId', isLoggedIn, isSameUser, validate, async (req, res, next) => {
  const status = 200
  const query = { _id: req.params.userId }
  const options = { new: true }
  const response = await User.findOneAndUpdate(query, req.body, options).select(excludeKeys)

  res.json({ status, response })
})

router.delete('/:userId', isLoggedIn, isSameUser, async (req, res, next) => {
  const status = 200

  const query = { _id: req.params.userId }
  const response = await User.findOneAndDelete(query, req.body).select(excludeKeys)

  res.json({ status, response })
})

router.delete('/:userId/assignments/:assignmentId', isLoggedIn, isSameUser, async (req, res, next) => {
  const status = 200
  
  const query = { _id: req.params.userId }
  const user = await User.findOne(query)
  const assignment = user.assignments.id(req.params.assignmentId)
  assignment.remove()
  await user.save()

  res.json({ status })
})

router.post('/:userId/assignments', isLoggedIn, isSameUser, async (req, res, next) => {
  const status = 200

  const { userId } = req.params 
  const user = await User.findById(userId).select(excludeKeys)

  delete req.body._id

  user.assignments.push(req.body)
  const response = await user.save()

  res.json({ status, response })
})

router.put('/:userId/assignments/:assignmentId', isLoggedIn, isSameUser, async (req, res, next) => {
  const status = 200

  const { userId, assignmentId } = req.params 
  const user = await User.findById(userId).select(excludeKeys)
  const assignment = user.assignments.id(assignmentId)
  Object.assign(assignment, req.body)
  const response = await user.save()

  res.json({ status, response })
})



module.exports = router
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const config = require('../nodemon.json')
const User = require('../api/models/user')

const reset = async () => {
  mongoose.connect(config.env.MONGO_DB_CONNECTION, { useNewUrlParser: true })
  // Careful with .remove() -- it sends a command directly to the database
  // and skips any mongoose validations
  await User.deleteMany() // Deletes all records
  return User.create([
    {
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: true,
      assignmnents: [
      ]
    },
    {
      firstName: 'Student',
      lastName: 'User',
      email: 'student@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: false,
      assignmnents: [
        {
          title: 'HTML & CSS Project',
          description: 'This is an HTML & CSS Project I workd on during our class',
          link:'https://github.com/username/project-repo'
        },
        {
          title: 'Flexbox Exercise',
          description: 'An exercise for working with Flexbox',
          link:'https://github.com/username/flexbox-exercise',
          score: 50,
          scorePossible: 50 
        }
      ]
    },
    {
      firstName: 'Breanna',
      lastName: 'McGrath',
      email: 'breanna.mcgrath@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: false,
      assignmnents: [
        {
          title: 'HTML & CSS Project',
          description: 'This is an HTML & CSS Project I workd on during our class',
          link:'https://github.com/username/project-repo',
          score: 44,
          scorePossible: 50 
        },
        {
          title: 'Flexbox Exercise',
          description: 'An exercise for working with Flexbox',
          link:'https://github.com/username/flexbox-exercise',
          score: 50,
          scorePossible: 50 
        }
      ]
    },
    {
      firstName: 'Macy',
      lastName: 'Humphries',
      email: 'mhumphries@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: false,
      assignmnents: [
        {
          title: 'HTML & CSS Project',
          description: 'This is an HTML & CSS Project I workd on during our class',
          link:'https://github.com/username/project-repo',
          score: 48,
          scorePossible: 50 
        },
        {
          title: 'Flexbox Exercise',
          description: 'An exercise for working with Flexbox',
          link:'https://github.com/username/flexbox-exercise',
          score: 50,
          scorePossible: 50 
        }
      ]
    },
    {
      firstName: 'Ivor',
      lastName: 'Davison',
      email: 'ivor.davison@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: false,
      assignmnents: [
        {
          title: 'HTML & CSS Project',
          description: 'This is an HTML & CSS Project I workd on during our class',
          link:'https://github.com/username/project-repo',
          score: 18,
          scorePossible: 50 
        },
        {
          title: 'Flexbox Exercise',
          description: 'An exercise for working with Flexbox',
          link:'https://github.com/username/flexbox-exercise',
          score: 50,
          scorePossible: 50 
        }
      ]
    },
    {
      firstName: 'Daanyal',
      lastName: 'Ventura',
      email: 'daanventura@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: false,
      assignmnents: [
        {
          title: 'HTML & CSS Project',
          description: 'This is an HTML & CSS Project I workd on during our class',
          link:'https://github.com/username/project-repo',
          score: 31,
          scorePossible: 50 
        },
        {
          title: 'Flexbox Exercise',
          description: 'An exercise for working with Flexbox',
          link:'https://github.com/username/flexbox-exercise',
          score: 50,
          scorePossible: 50 
        }
      ]
    },
    {
      firstName: 'Tyson',
      lastName: 'Atherton',
      email: 'tysonatherton3@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: false,
      assignmnents: [
        {
          title: 'HTML & CSS Project',
          description: 'This is an HTML & CSS Project I workd on during our class',
          link:'https://github.com/username/project-repo',
          score: 26,
          scorePossible: 50 
        },
        {
          title: 'Flexbox Exercise',
          description: 'An exercise for working with Flexbox',
          link:'https://github.com/username/flexbox-exercise',
          score: 50,
          scorePossible: 50 
        }
      ]
    },
    {
      firstName: 'Michael',
      lastName: 'Munsey',
      email: 'munsey@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: false,
      assignmnents: [
        {
          title: 'HTML & CSS Project',
          description: 'This is an HTML & CSS Project I workd on during our class',
          link:'https://github.com/username/project-repo',
          score: 50,
          scorePossible: 50 
        },
        {
          title: 'Flexbox Exercise',
          description: 'An exercise for working with Flexbox',
          link:'https://github.com/username/flexbox-exercise',
          score: 50,
          scorePossible: 50 
        }
      ]
    },
    {
      firstName: 'Beau',
      lastName: 'Barth',
      email: 'beaubarth@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: false,
      assignmnents: [
        {
          title: 'HTML & CSS Project',
          description: 'This is an HTML & CSS Project I workd on during our class',
          link:'https://github.com/username/project-repo'
        },
        {
          title: 'Flexbox Exercise',
          description: 'An exercise for working with Flexbox',
          link:'https://github.com/username/flexbox-exercise',
          score: 50,
          scorePossible: 50 
        }
      ]
    },
    {
      firstName: 'Jeremy',
      lastName: 'Diaz',
      email: 'jeremydiaz@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: false,
      assignmnents: [
        {
          title: 'HTML & CSS Project',
          description: 'This is an HTML & CSS Project I workd on during our class',
          link:'https://github.com/username/project-repo'
        },
        {
          title: 'Flexbox Exercise',
          description: 'An exercise for working with Flexbox',
          link:'https://github.com/username/flexbox-exercise',
          score: 50,
          scorePossible: 50 
        }
      ]
    },
    {
      firstName: 'Ryan',
      lastName: 'Fields',
      email: 'ryanfields@email.com',
      password: bcrypt.hashSync('password', 10),
      isAdmin: false,
      assignmnents: [
        {
          title: 'HTML & CSS Project',
          description: 'This is an HTML & CSS Project I workd on during our class',
          link:'https://github.com/username/project-repo'
        },
        {
          title: 'Flexbox Exercise',
          description: 'An exercise for working with Flexbox',
          link:'https://github.com/username/flexbox-exercise',
          score: 50,
          scorePossible: 50 
        }
      ]
    }
  ])
}

reset().catch(console.error).then((response) => {
  console.log(`Seeds successful! ${response.length} records created.`)
  return mongoose.disconnect()
})
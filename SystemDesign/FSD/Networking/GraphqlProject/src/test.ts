import mongoose from 'mongoose';
import { Course } from './modules/course/course.model'; // Adjust the path accordingly
import { User } from './modules/user/user.model';     // Adjust the path accordingly
import config from './config';

// Connect to MongoDB
const start = async () => {
  try {
    await mongoose.connect(config.dbUrl);

    console.log('Connected to MongoDB');

    // 1. Create Users
    const user1 = new User({ name: 'Adil', email: 'khanmdadil094@gmail.com', password: '123456789', role: 'instructor' });
    const user2 = new User({ name: 'Asif', email: 'mdadilakhtar8@gmail.com', password: '123456789', role: 'student' });
    const user3 = new User({ name: 'Aamir', email: 'aadmirkhan7186@gmail.com', password: '123456789', role: 'student' });

    await user1.save();
    await user2.save();
    await user3.save();

    console.log('Users created:', user1.name, user2.name, user3.name);

    // 2. Create Course
    const course1 = new Course({
      title: 'Intro to Js',
      description: 'Learn basics of js and its integration',
      instructor: user1._id,
      enrolledStudents: [user2._id, user3._id],
      category: 'Backend',
    });
     const course2 = new Course({
      title: 'Intro to React',
      description: 'Learn basics of React and its integration',
      instructor: user1._id,
      enrolledStudents: [user2._id, user3._id],
      category: 'Backend',
    });
     const course3 = new Course({
      title: 'Intro to Docker',
      description: 'Learn basics of Coker and its integration',
      instructor: user1._id,
      enrolledStudents: [user2._id, user3._id],
      category: 'Backend',
    });

    await course1.save();
    await course2.save();
    await course3.save();

    console.log('Course created:', course1.title);
    console.log('Course created:', course2.title);
    console.log('Course created:', course3.title);

    // Done
    mongoose.disconnect();
  } catch (err) {
    console.error('Error:', err);
  }
};

start();

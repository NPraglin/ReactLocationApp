import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NathanList from './components/GoalList/NathanList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course!'},
    {id: 'cg2', text: 'Learn all about the course main topic!'},
    {id: 'cg3', text: 'Celebrate with Ice Cream! Help Students in Q&A'}
  ]);

  const nathanGoals = [
    {id: 'ng1', text: 'Master React'},
    {id: 'ng2', text: 'Flex on the classmates'},
    {id: 'ng3', text: 'Score a phat paying job'},
  ];

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) =>  {
      return prevCourseGoals.concat(newGoal)});
    }

  return (
  <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals} />

    <h3>Nathan's personal goals</h3>
    <NathanList ngoals={nathanGoals} />
  </div>
  );
};


export default App;

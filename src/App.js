import { useEffect, useState } from 'react';
import { Card } from 'antd';

import './App.css';
import { axiosInstance } from './api';
import { feedbackTypes } from './constants';
import FeedbackTable from './components/FeedbackTable';
import FeedbackTableSelect from './components/FeedbackTableSelect';
import FeedbackStatistic from './components/FeedbackStatistic';
import { calculateFeedbackStatistic, mapFeedbackByType } from './util';

function App() {
  const [feedback, setFeedback] = useState([]);
  const [feedbackType, setFeedbackType] = useState(feedbackTypes.rating);
  const [feedbackByType, setFeedbackByType] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data: { data: feedback } } = await axiosInstance.get('/feedback');
      setFeedback(feedback || []);
    };

    fetchFeedback();
  }, []);

  useEffect(() => {
    setFeedbackByType(mapFeedbackByType(feedback, feedbackType));
  }, [feedback, feedbackType]);

  return (
    <div className="App">
      <header className="App-header"></header>

      <main className="App-main">
        <Card>
          <FeedbackStatistic { ...calculateFeedbackStatistic(feedbackByType) } />
          <FeedbackTableSelect value={feedbackType} onSelect={setFeedbackType} />
          <FeedbackTable type={feedbackType} data={feedbackByType} />
        </Card>
      </main>
    </div>
  );
}

export default App;

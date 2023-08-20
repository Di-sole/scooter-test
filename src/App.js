import './styles/@nullstyle.scss';
import './styles/@globals.scss';
import WelcomeBlock from './components/WelcomeBlock/WelcomeBlock';
import AdvantagesBlock from './components/AdvantagesBlock/AdvantagesBlock';
import EventsBlock from './components/EventsBlock/EventsBlock';
import SubscriptionBlock from './components/SubscriptionBlock/SubscriptionBlock';
import ConditionsBlock from './components/СonditionsBlock/СonditionsBlock';

function App() {
  return (
    <>
      <WelcomeBlock />
      <div className='container'>
        <AdvantagesBlock />
        <EventsBlock />
        <SubscriptionBlock />
        <ConditionsBlock />
      </div>
    </>
  );
}

export default App;

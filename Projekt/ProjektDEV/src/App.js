import { CVProvider } from './context/CVContext';
import FormComponent from './components/FormComponent';
import PreviewComponent from './components/PreviewComponent';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <CVProvider>
      <div className="app-container">
        <ThemeToggle />
        <div className="editor-preview">
          <FormComponent />
          <PreviewComponent />
        </div>
      </div>
    </CVProvider>
  );
}

export default App;

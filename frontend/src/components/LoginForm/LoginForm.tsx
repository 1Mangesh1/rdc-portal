import styles from "../styles/LoginForm.module.css";
import Form from "./Form";

const LoginForm = () => {
  return (
    //     <div className="h-[100vh] bg-[#172434] w-[100vw] text-white">
    <div className="flex flex-col items-center justify-center min-h-[100vh] gap-4 bg-slate-100">
      <div className={`flex flex-col items-center justify-center gap-5`}>
        <div>
          <h1 className={styles.rubberDuckHeading}>
            RubberDuck Cohort 3<span>.</span>0
          </h1>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

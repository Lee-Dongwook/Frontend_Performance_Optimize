import { useId } from "react";

const PasswordField = () => {
  const passwordHintId = useId();

  return (
    <div>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>비밀번호는 최소 10자리 이상</p>
    </div>
  );
};

export const UseId = () => {
  return (
    <>
      <h2>비밀번호 입력</h2>
      <PasswordField />
      <h2>비밀번호 확인</h2>
      <PasswordField />
    </>
  );
};

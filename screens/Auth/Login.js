import React, { useState } from "react";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { Alert } from "react-native";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default ({ navigation }) => {
  const emailInput = useInput("");
  const [loading, setLoading] = useState(false);
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: {
      email: emailInput.value
    }
  });
  const handleLogin = async () => {
    const { value } = emailInput;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
      return Alert.alert("Email이 비어있습니다.");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Email형식에 맞게 작성하여 주세요.");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("해당 이메일이 유효하지 않습니다.");
    }
    try {
      setLoading(true);
      const {
        data: { requestSecret }
      } = await requestSecretMutation();
      if (requestSecret) {
        Alert.alert("Email을 확인해 주세요.");
        navigation.navigate("Confirm");
        return;
      } else {
        Alert.alert("계정이 존재하지 않습니다.");
        navigation.navigate("Signup");
      }
    } catch (e) {
      console.log(e);
      Alert.alert("로그인 할 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          value={emailInput.value}
          onChange={emailInput.onChange}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="send"
          onSubmitEditing={handleLogin}
          autoCorrect={false}
        />
        <AuthButton loading={loading} onPress={handleLogin} text="Log In" />
      </View>
    </TouchableWithoutFeedback>
  );
};

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Input, Button, Icon, Text, Image } from "@rneui/themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { getImage } from "../../helpers/getImage";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigation = useNavigation();
  const currentYear = new Date().getFullYear();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(true);
    console.log(values);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("HomeScreen");
    }, 2000);
  };

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 0.8 }}>
      <View style={styles.containerImage}>
        <Image
          style={{ width: 300, height: 200 }}
          source={getImage("loginLogo")}
        />
      </View>

      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <Input
                name="email"
                placeholder="Email"
                leftIcon={<Icon name="email" size={24} color="black" />}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                errorMessage={touched.email && errors.email ? errors.email : ""}
                autoComplete="email"
                inputContainerStyle={styles.inputContainerStyle}
              />
              <Input
                name="password"
                placeholder="Password"
                leftIcon={<Icon name="lock" size={24} color="black" />}
                secureTextEntry
                autoCapitalize="none"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                errorMessage={
                  touched.password && errors.password ? errors.password : ""
                }
                autoCompleteType="password"
                inputContainerStyle={styles.inputContainerStyle}
              />
              <Button
                title="Login"
                onPress={handleSubmit}
                buttonStyle={styles.loginButton}
              />
              <TouchableOpacity
                style={styles.signUpContainer}
                onPress={() => navigation.navigate("SignUpScreen")}
              >
                <Text style={styles.signUpText}>
                  Don't have an account?{" "}
                  <Text style={styles.signUpButton}>Sign Up</Text>
                </Text>
              </TouchableOpacity>

              <View style={styles.footer}>
                <Text style={styles.copyRightText}>
                  © {currentYear} Rajitha Network. All rights reserved.
                </Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  signUpContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  signUpText: {
    fontSize: 16,
    color: "gray",
  },
  signUpButton: {
    color: "#007bff",
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "",
  },
  copyRightText: {
    fontSize: 12,
    marginTop: 10,
    color: "gray",
    textAlign: "center",
  },
  inputContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#86939e",
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#007bff",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Login;

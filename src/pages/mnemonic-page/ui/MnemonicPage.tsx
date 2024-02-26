import { useAuthStore, useMnemonicStore } from "app/store";
import { View, Pressable, Modal } from "react-native";
import { Text } from "shared";
import QRCode from "react-native-qrcode-svg";
import { Button, Colors, PageWrapper } from "shared";
import uuid from "react-native-uuid";
import { Word } from "./Word";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { modal, styles } from "./styles";
import { StatusBar } from "react-native";

export const MnemonicPage = ({ navigation }) => {
  const [isQrModal, setIsQrModal] = useState(false);
  const { setAuth } = useAuthStore();
  const { mnemonic } = useMnemonicStore();
  const mnemonicArray = mnemonic.split(" ");

  return (
    <PageWrapper>
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isQrModal}
          onRequestClose={() => {
            setIsQrModal(!isQrModal);
          }}
        >
          <View style={modal.centeredView}>
            <View style={modal.modalView}>
              <QRCode size={200} value={mnemonic} />
              <Button
                style={{ marginTop: 30, padding: 10, width: 100 }}
                theme="primary"
                title="Hide"
                onPress={() => setIsQrModal(false)}
              />
            </View>
          </View>
        </Modal>

        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 30,
            }}
          >
            <View
              style={{
                alignItems: "center",
                display: "flex",
              }}
            >
              <View style={{ position: "absolute", left: 0, top: -2 }}>
                <Button
                  onPress={() => navigation.navigate("Greeting")}
                  theme="secondary"
                  leftIcon
                >
                  <Icon name="arrow-left" color={Colors.primary50} size={30} />
                </Button>
              </View>

              <View style={styles.header}>
                <Text style={styles.headerText}>Your secret phrase</Text>
              </View>
            </View>
            <View style={styles.phraseContaioner}>
              {mnemonicArray.map((word, index) => (
                <Word
                  key={uuid.v4().toString()}
                  index={index + 1}
                  word={word}
                />
              ))}
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              display: "flex",
              width: "100%",
              marginTop: 30,
            }}
          >
            <Text style={{ color: Colors.secondary500 }}>
              Keep the seed phrase in a safe place!
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="View QR"
            onPress={() => setIsQrModal(true)}
            theme="secondary"
          >
            <Icon name="qrcode" />
          </Button>
          {/* <TouchableOpacity onPress={() => {}}>
          <Button title="Copy" theme="secondary">
            <Icon name="clone" />
          </Button>
        </TouchableOpacity> */}
          <Button
            theme={"primary"}
            title={"Continue"}
            onPress={() => {
              navigation.navigate("HomeScreen");
              setAuth(true);
            }}
          />
        </View>
      </View>
    </PageWrapper>
  );
};

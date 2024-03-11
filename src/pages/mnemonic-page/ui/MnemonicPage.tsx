import { useEffect, useState } from "react";
import { View, Modal, StatusBar } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Button, Colors, PageWrapper, Text } from "shared";
import uuid from "react-native-uuid";
import { Word } from "./Word";
import { modal, styles } from "./styles";
import { FontAwesome6 } from "@expo/vector-icons";
import { getMenmonicFromStore } from "shared/utils/encrypted-store/getMnemonicFromStore";

export const MnemonicPage = ({ navigation }) => {
  const [isQrModal, setIsQrModal] = useState(false);
  const [mnemonic, setMnemonic] = useState("");
  const [isSeedVisible, setIsSeedVisible] = useState(false);
  useEffect(() => {
    getMenmonicFromStore().then((mnemonic) => {
      setMnemonic(mnemonic);
    });
  });

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
                />
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
                  blur={!isSeedVisible}
                  word={word}
                />
              ))}
            </View>
          </View>
          <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
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
            <FontAwesome6 name="qrcode" size={20} color={Colors.primary100} />
          </Button>
          <Button
            title={isSeedVisible ? "Hide seed" : "Show seed"}
            theme="secondary"
            onPress={() => setIsSeedVisible((prev) => !prev)}
          >
            <FontAwesome6
              name={isSeedVisible ? "eye-slash" : "eye"}
              size={20}
              color={Colors.primary100}
            />
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
            }}
          />
        </View>
      </View>
    </PageWrapper>
  );
};

import { useAuthStore, useMnemonicStore } from "app/store";
import { Text, View, Pressable, Modal } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Button, Colors, PageWrapper } from "shared";
import uuid from "react-native-uuid";
import { Word } from "./Word";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { modal, styles } from "./styles";

export const MnemonicPage = ({ navigation }) => {
  const [isQrModal, setIsQrModal] = useState(false);
  const { setAuth } = useAuthStore();
  const { mnemonic } = useMnemonicStore();
  const mnemonicArray = mnemonic.split(" ");

  return (
    <PageWrapper>
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
              <Pressable
                style={[modal.button, modal.buttonClose]}
                onPress={() => setIsQrModal(!isQrModal)}
              >
                <Text style={modal.textStyle}>Hide Modal</Text>
              </Pressable>
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
              <View style={{ position: "absolute", left: 0 }}>
                <Button
                  title="Back"
                  onPress={() => navigation.navigate("Greeting")}
                  theme="secondary"
                  leftIcon
                >
                  <Icon name="arrow-left" />
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
              navigation.navigate("ConfirmMnemonic");
              setAuth(true);
            }}
          />
        </View>
      </View>
    </PageWrapper>
  );
};

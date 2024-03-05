import { Camera, CameraView } from "expo-camera/next";
import { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Colors, Text } from "shared";
import { FontAwesome6 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { BarCodeScanner } from "expo-barcode-scanner";

export const ScanPage = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [image, setImage] = useState(null);
  const [scannedData, setScannedData] = useState("");

  useEffect(() => {
    if (scanned && scannedData) {
      alert(scannedData);
    }
  }, [scanned, scannedData]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result && result.assets[0].uri) {
      try {
        await BarCodeScanner.scanFromURLAsync(result.assets[0].uri).then(
          (res) => {
            if (!res.length) {
              setScanned(true);
              setScannedData("No QR Code Found");
              setTimeout(() => setScannedData(""), 4000);
            }
            const dataNeeded = res[0]?.data;
            setScannedData(dataNeeded);
            setScanned(scannedData.length > 0);
          }
        );
      } catch (error) {
        // if there this no QR code
        setScannedData("No QR Code Found");
        setTimeout(() => setScannedData(""), 4000);
      }
    }
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setScannedData(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: image ? "center" : "space-between",
      }}
    >
      {image ? (
        <Image source={{ uri: image }} style={{ width: 400, height: 400 }} />
      ) : (
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr", "pdf417"],
          }}
          style={[
            StyleSheet.absoluteFillObject,
            {
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#ccc",
              opacity: 0.9,
              paddingHorizontal: 20,
              paddingVertical: 40,
            },
          ]}
        >
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
              <View
                style={{
                  justifyContent: "space-between",
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <Button
                  onPress={() => navigation.navigate("HomeScreen")}
                  theme="secondary"
                >
                  <FontAwesome6
                    name="chevron-left"
                    color={Colors.primary50}
                    size={24}
                  />
                </Button>

                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: Colors.primary50,
                    }}
                  >
                    Scan a QR code
                  </Text>
                </View>
                <Button onPress={pickImage} theme="secondary">
                  <FontAwesome6
                    name="image"
                    color={Colors.primary50}
                    size={24}
                  />
                </Button>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 300,
              height: 300,
              borderWidth: 6,
              borderRadius: 50,
              borderTopColor: Colors.primary1000,
              backgroundColor: "transparent",
            }}
          ></View>
          <View></View>
        </CameraView>
      )}
    </View>
  );
};

---
description: XIAO ESP32S3(sense) With Zephyr(RTOS)
title:  XIAO ESP32S3(sense) With Zephyr(RTOS)
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-ESP32S3-Zephyr-RTOS
last_update:
  date: 3/20/2024
  author: timo614
---

# XIAO ESP32S3(sense) With Zephyr(RTOS)

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr-esp32s3.png"/></div>

This wiki covers [Zephyr](https://www.zephyrproject.org/) support for the [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/). With the assistance of this guide you will be able to utilize the feature set available to the board.

## What is [Zephyr](https://www.zephyrproject.org/)

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/XIAO/Zephyr_logo.png"/></div>

The [**Zephyr**](https://www.zephyrproject.org/) OS is based on a small-footprint kernel designed for use on resource-constrained and embedded systems: from simple embedded environmental sensors and LED wearables to sophisticated embedded controllers, smart watches, and IoT wireless applications.

For each supported device Zephyr has a [devicetree](https://docs.zephyrproject.org/latest/build/dts/index.html) file that describes the board and its features. The [Xiao ESP32S3 Zephyr board page](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html#supported-features) describes the supported features currently available which is defined by the [board's dts file](https://github.com/zephyrproject-rtos/zephyr/blob/main/boards/seeed/xiao_esp32s3/xiao_esp32s3_esp32s3_procpu.yaml#L7). 

*Reference: [**Zephyr Project**](https://docs.zephyrproject.org/latest/introduction/index.html#)*

## Getting Started

The first step to working with Zephyr is to get the SDK and toolchain setup for local development. The [Zephyr getting started guide](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) should be referenced for the associated setup procedure needed for your environment.

Once the Zephyr toolchain has been setup and an associated SDK has been downloaded you can begin application development.

For the Xiao ESP32S3 the [board description file](https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32s3/doc/index.html) can be referenced for further setup information.

To fetch the blobs needed for using the ESP32S3 run the following command:

```
west blobs fetch hal_espressif
```

After this samples can be built and flashed to the board.

The simplest example is to run the "Hello World" sample on the board. After changing to the directory of the Zephyr install run the following commands.

```
west build -p always -b xiao_esp32s3 samples/hello_world
west flash
west espressif monitor
```

With the final command you should see the response showing the "Hello World!" greeting.

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Hello World! xiao_esp32s3
```

To assist with the process of using Zephyr with Xiao and its expansion board a repository has been constructed with several overlays and configurations used here. The commands included in this wiki article assume it is located `../applications/xiao-zephyr-examples` relative to the zephyr root. An alternative path can be provided to the commands below by updating it. 

```
git clone https://github.com/Cosmic-Bee/xiao-zephyr-examples
```

## Hardware Preparation

If you want to follow this tutorial through everything, you will need to prepare the following.

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32S3 Sense</th>
      <th>Seeed Studio Expansion Board</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

### Developer Knowledge

#### XIAO Expansion Board

  In order to use Grove modules with Seeed Studio XIAO ESP32S3, we will use a [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) and connect XIAO ESP32S3 on it.
  
  After that, the Grove connectors on the board can be used to connect Grove modules

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### Pin Definitions

  You need to follow the graphic below to use the appropriate internal pin numbers when connecting the Grove modules to the Grove connectors on Grove Shield for Seeed Studio XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg"style={{width:900, height:'auto'}}/></div>

### Primary Functionality

<ul>
  <li>Bluetooth</li>
  <li>Wi-Fi</li>
  <li>TFLite</li>
</ul>

#### Bluetooth

To test this setup we can use an existing sample with Zephyr:

```
west build -p always -b xiao_esp32s3 samples/bluetooth/observer
west flash
west espressif monitor
```

You will see a console available for sending commands to the board:
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Starting Observer Demo
Started scanning...
Exiting main thread.
Device found: EC:11:27:22:AF:D2 (public) (RSSI -77), type 0, AD data len 31
Device found: 02:96:58:9A:B4:64 (random) (RSSI -78), type 3, AD data len 31
Device found: 66:A5:E1:CF:8C:35 (random) (RSSI -58), type 0, AD data len 17
Device found: 62:09:50:DB:85:D0 (random) (RSSI -92), type 0, AD data len 14
Device found: C4:5A:95:A7:96:7D (random) (RSSI -78), type 0, AD data len 20
Device found: E5:44:60:88:DB:99 (random) (RSSI -82), type 0, AD data len 27
Device found: 66:18:ED:DD:74:1C (random) (RSSI -71), type 0, AD data len 17
Device found: 37:D2:FC:F8:FA:B8 (random) (RSSI -75), type 3, AD data len 31
Device found: 40:B8:84:E5:5F:A4 (random) (RSSI -70), type 2, AD data len 28
Device found: 44:EB:7C:AA:89:0B (random) (RSSI -83), type 0, AD data len 18
Device found: 71:AC:4A:98:5E:73 (random) (RSSI -72), type 2, AD data len 4
Device found: 60:D9:62:70:EF:4C (random) (RSSI -95), type 2, AD data len 4
Device found: D8:7D:FC:AE:37:F0 (random) (RSSI -67), type 3, AD data len 8
Device found: 48:1F:C0:29:77:C2 (random) (RSSI -73), type 2, AD data len 4
Device found: 46:B7:35:F5:D7:BE (random) (RSSI -86), type 3, AD data len 17
Device found: E5:4A:F1:1C:3C:39 (random) (RSSI -88), type 3, AD data len 8
```

```
CONFIG_BT=y
CONFIG_BT_OBSERVER=y
```

The [conf file](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/bluetooth/observer/prj.conf) here enables bluetooth related features for the Zephyr build.

#### Wi-Fi

To test this setup we can use an existing sample with Zephyr:

```
west build -p always -b xiao_esp32s3 samples/net/wifi
west flash
west espressif monitor
```

You will see a console available for sending commands to the board:
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
uart:~$ 
```

Several commands exist allowing you to see and connect to local networks, see the [sample readme](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/README.rst) for more information.
```
uart:~$ wifi scan
Scan requested

Num  | SSID                             (len) | Chan (Band)   | RSSI | Security        | BSSID             | MFP     
1    | Zephytopia                       10    | 6    (2.4GHz) | -42  | WPA2-PSK        |                   | Disable 
2    | Maceronia                        9     | 6    (2.4GHz) | -43  | WPA2-PSK        |                   | Disable 

```

Let's dive into this example a bit to see why it works:
(Note: the Xiao ESP32S3 is supported specifically by this example so we don't need a custom overlay or conf to load up the file.)
```
&wifi {
	status = "okay";
};
```

The app [overlay file](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.overlay) is used to setup various board components. Using this file the example can be utilized as the overlay informs the sample logic to enable Wi-Fi.

```
CONFIG_WIFI=y

CONFIG_NETWORKING=y
CONFIG_NET_L2_ETHERNET=y

CONFIG_NET_IPV6=n
CONFIG_NET_IPV4=y
CONFIG_NET_DHCPV4=y
CONFIG_ESP32_WIFI_STA_AUTO_DHCPV4=y

CONFIG_NET_LOG=y
```

The [conf file](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/net/wifi/boards/xiao_esp32s3.conf) here enables several networking related features for the Zephyr build.

#### TFLite - Hello World

Enable TFLite with Zephyr and update:
```
west config manifest.project-filter -- +tflite-micro
west update
```

Build the sample and flash to your board:
```
west build -p always -b xiao_esp32s3 samples/modules/tflite-micro/hello_world
west flash
west espressif monitor
```

You will see results returned from the console:
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
x_value: 1.0*2^-127, y_value: 1.0*2^-127

x_value: 1.2566366*2^-2, y_value: 1.4910772*2^-2

x_value: 1.2566366*2^-1, y_value: 1.1183078*2^-1

x_value: 1.8849551*2^-1, y_value: 1.677462*2^-1

x_value: 1.2566366*2^0, y_value: 1.9316229*2^-1

x_value: 1.5707957*2^0, y_value: 1.0420598*2^0

x_value: 1.8849551*2^0, y_value: 1.9146791*2^-1

x_value: 1.0995567*2^1, y_value: 1.6435742*2^-1

x_value: 1.2566366*2^1, y_value: 1.0674761*2^-1

x_value: 1.4137159*2^1, y_value: 1.8977352*2^-3
```

Additional information about TFLite is outside of the scope of this guide but the example serves as a guide to the capabilities of the device and the components required for running the TFLite setup.

### Grove Components

<ul>
  <li>[Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C Display</li>
  <li>[Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - Button</li>
  <li>[Grove - Temperature and Humidity Sensor (SHT31)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)</li>
</ul>

#### Grove - Expansion Board - I2C Display

<div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/xiao_expansion_oled.jpg?raw=true" style={{width:300, height:'auto'}}/></div>

To test this setup we can use an existing sample with Zephyr:

```
west build -p always -b xiao_esp32s3 samples/drivers/display -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-expansion.overlay DEXTRA_CONF_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/samples.conf
west flash
```

You'll see a display showing multiple black boxes and a blinking box in the corner given this display only supports two colors.

Let's dive into this example a bit to see why it works:
```
/ {
    chosen {
      zephyr,display = &ssd1306;
    };
};

&i2c0 {
  status = "okay";

  ssd1306: ssd1306@3c {
    compatible = "solomon,ssd1306fb";
    reg = <0x3c>;
    width = <128>;
    height = <64>;
    segment-offset = <0>;
    page-offset = <0>;
    display-offset = <0>;
    multiplex-ratio = <63>;
    segment-remap;
    com-invdir;
    prechargep = <0x22>;
  };
};

```

The app overlay file in this example sets up a SSD1306 OLED screen at the 0x3C register. It is selected as the zephyr display in the chosen section.

```
CONFIG_LV_Z_VDB_SIZE=64
CONFIG_LV_COLOR_DEPTH_1=y
CONFIG_I2C=y
```

The associated configuration file enables the OLED screen to properly render by setting its depth to 1 and enabling I2C for the project.

#### Grove - Expansion Board - Button

To test this setup we can use an existing sample with Zephyr:

```
west build -p always -b xiao_esp32s3 samples/basic/button -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/xiao-expansion.overlay
west flash
west espressif monitor
```

Pressing the button with the sample will trigger the onboard LED to light up.

You will see results returned from the console:

```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
Set up button at gpio@60004000 pin 2
Set up LED at gpio@60004000 pin 21
Press the button
Button pressed at 842621292
Button pressed at 1164489270
Button pressed at 1329015357
Button pressed at 1577684271
Button pressed at 1728636675
Button pressed at 1728755988
Button pressed at 1822426500
```

Let's dive into this example a bit to see why it works:
```
/ {
    aliases {
		sw0 = &button0;
    };

    buttons {
            compatible = "gpio-keys";
            button0: button_0 {
                gpios = <&gpio0 2 (GPIO_PULL_UP | GPIO_ACTIVE_LOW)>;
                label = "Expansion Board Button";
            };
    };
};
```

The app overlay file is used to setup various board components. Using this file the button example can be utilized as the overlay allows the Zephyr to configure the button and make it available for the associated code.

In this case GPIO 2 corresponds with Pin A1/D1 on the Xiao ESP32S3. It is setup in this overlay to act as a button and is aliased to the sw0 name to allow it to be used for the sample which has code expecting this.


#### Grove - Temperature and Humidity Sensor (SHT31)

First solder on pins and connect your Xiao ESP32S3 to the expansion board. Then connect a grove connector cable between the Grove SHT31 and one of the I2C ports on the expansion board.

<div style={{textAlign:'center'}}><img src="https://github.com/Cosmic-Bee/xiao-zephyr-examples/blob/main/images/xiao_sht31.jpg?raw=true" style={{width:300, height:'auto'}}/></div>

To test this setup we can use an existing sample with Zephyr:

```
west build -p always -b xiao_esp32s3 samples/sensor/sht3xd -- -DDTC_OVERLAY_FILE=$(dirname $(pwd))/applications/xiao-zephyr-examples/sht31.overlay
west flash
west espressif monitor
```

You will see results returned from the console:
```
*** Booting Zephyr OS build v3.6.0-1155-g1a55caf8263e ***
SHT3XD: 25.54 Cel ; 53.39 %RH
SHT3XD: 25.58 Cel ; 53.42 %RH
SHT3XD: 25.60 Cel ; 53.57 %RH
SHT3XD: 25.68 Cel ; 53.71 %RH
SHT3XD: 25.68 Cel ; 53.72 %RH
SHT3XD: 25.71 Cel ; 53.67 %RH
SHT3XD: 25.75 Cel ; 53.60 %RH
SHT3XD: 25.76 Cel ; 53.48 %RH
SHT3XD: 25.82 Cel ; 53.31 %RH
SHT3XD: 25.84 Cel ; 53.16 %RH
```

Let's dive into this example a bit to see why it works:
```
 &i2c0 {
	sht3xd@44 {
			compatible = "sensirion,sht3xd";
			reg = <0x44>;
		};
	};
```

The app overlay file is used to setup various board components. Using this file the SHT31 example can be utilized as the overlay informs the [sample logic](https://github.com/zephyrproject-rtos/zephyr/blob/main/samples/sensor/sht3xd/src/main.c) how to configure the sensor for our board.

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=56649975).
- Thanks **Tim's efforts** and your work will be [exhibited](https://wiki.seeedstudio.com/Honorary-Contributors/).


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
import cv2 as cv
import time
import mediapipe as mp
import numpy as np
import math
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume
###########################
wCam, hCam = 640, 480
###########################

cap = cv.VideoCapture(0)
cap.set(3, wCam)
cap.set(4, hCam)
pTime = 0

mpHands = mp.solutions.hands
hands = mpHands.Hands(min_detection_confidence=0.7)
mpDraw = mp.solutions.drawing_utils

devices = AudioUtilities.GetSpeakers()
interface = devices.Activate(
    IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))
# volume.GetMute()
# volume.GetMasterVolumeLevel()
volRange = volume.GetVolumeRange()

minVol = volRange[0]
maxVol = volRange[1]

vol = 0
volBar = 400
volPer = 0

while True:
    success, img = cap.read()

    imgRGB = cv . cvtColor(img, cv.COLOR_BGR2RGB)
    results = hands.process(imgRGB)
    lmList = []
    if results.multi_hand_landmarks:
        for handLms in results.multi_hand_landmarks:
            for id, lm in enumerate(handLms.landmark):

                h, w, c = img.shape
                cx, cy = int(lm.x*w), int(lm.y*h)
                # print(id,cx,cy)
                lmList.append([id, cx, cy])

                cv.circle(img, (cx, cy), 8, (0, 255, 0), cv.FILLED)

            mpDraw.draw_landmarks(img, handLms, mpHands.HAND_CONNECTIONS)
    if len(lmList) != 0:
        # print(lmList[4],lmList[8])

        x1, y1 = lmList[4][1], lmList[4][2]
        x2, y2 = lmList[8][1], lmList[8][2]
        cx, cy = (x1+x2)//2, (y1+y2)//2

        cv.circle(img, (x1, y1), 10, (255, 0, 0), cv.FILLED)
        cv.circle(img, (x2, y2), 10, (255, 0, 0), cv.FILLED)
        cv.line(img, (x1, y1), (x2, y2), (0, 255, 0), 3)
        cv.circle(img, (cx, cy), 10, (255, 0, 0), cv.FILLED)
        length = math.hypot(x2-x1, y2-y1)
        # print(length)

        # Hand Range 50-220
        # volume Range -64 - 0

        vol = np.interp(length, [50, 170], [minVol, maxVol])
        volBar = np.interp(length, [50, 170], [400, 150])
        volPer = np.interp(length, [50, 170], [0, 100])
        print(int(length), vol)
        volume.SetMasterVolumeLevel(vol, None)

        if(length < 50):
            cv.circle(img, (cx, cy), 10, (0, 0, 255), cv.FILLED)

    cv.rectangle(img, (50, 150), (85, 400), (0, 255, 0), 2)
    cv.rectangle(img, (50, int(volBar)), (85, 400), (0, 255, 0), cv.FILLED)
    cv.putText(img, f'{int(volPer)}%', (40, 450),
               cv.FONT_HERSHEY_PLAIN, 3, (0, 255, 0), 3)

    cTime = time.time()
    fps = 1/(cTime-pTime)
    pTime = cTime

    cv.putText(img, f'FPS:{int(fps)}', (40, 70),
               cv.FONT_HERSHEY_PLAIN, 3, (0, 0, 255), 3)

    cv.imshow("Video", img)

    cv.waitKey(1)

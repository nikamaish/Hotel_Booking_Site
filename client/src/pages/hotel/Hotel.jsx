import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBgVFBUZGRgZGhsbGxoaGBsYGhoaHRgbGyMYGxsbIy4kGx8tIRodJTclKi4xNDQ0GyM6PzozPi0zNDEBCwsLEA8QHxISHzMqJCo0MzMzMzMxMzMzMzMzOTMzMzMzMzMzMzMzNTMzMzMzMzMzMzUzMzMzMzMzMzMzMzMzM//AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAECBAYDB//EAEUQAAIBAwMBBQUFBgQDBwUAAAECEQADIQQSMUEFEyJRYQYycYGRQlKhsfAUI2KSwdEVJHLhY6KyBzNDgrPi8XODo8LS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAgIBBAICAgEFAQAAAAAAAAECEQMSITFBBFETYSJxMiNCgaGxBf/aAAwDAQACEQMRAD8AxoSpBakKmK9ERECpinAqQFSAwFSApwKeKAGAp4p6egCMUoqVKkBPb4Bge8c9eB+Fc4ruU/dhoHvkTOfdBiPL/euNJFT6GimipUqZJGKelTEUAPSqNPQAqVKaagB6U01MTQBKaaozTTQBKlUZpTQBKomlNMTQAjTGkTUaAEajT01AxjUTUjUaAGNQapmmIooDkRUa6kVGKKAsWLgdQw4rqBQvTarYoEyNwkngAiIBHBn86v6e+twEqeKnHkjNLfcTVHYCpCozUga0oCQNSFQppooDpTTTA09IB5pbqjSNOgLRH7oHaPfPinMbR4Y8uTNV6uvpCLZyJXxe+sbYJwv3vTnn4VQmpjvZU+v0SNRpTTmnRA00pqJp6dDHmmmlSooBTSpU0UUA9Ss2mdtqiTDHkDCqWPPoDUYqtrdU1rYye9JxmCNpUyByM8UpbKwO8qASXAI24Jg53Z+A2/iKSPbIO64ARwMHdg9ZEZA8+aCpfvd4XQFXYfYQJ4cHAAgDwjjyqeo1GoZ1NxnZlO5d0sQfDkfyr9BWDyv0PSHbGlZ0d1IISJAkmCCZwOPCc9K4RVM9o3ZUuZAJ6AGGUqcgAkQeJiiJTEjIOQfStMc3K7CUaORFIipEVEitKENFRqZFMRSAjTGpRTRQMiaYipRTRQBA0xFTiokUAcyKaKmRUYpACzuGVMYHEcyefIccVa02o7thunIyYE4mQT8aq2iApY+R8zmYnH6605vG5EYgsfEZ3SeoOBxXlwnKLtFMOrcU8MD8CDUpqppYZgTb2sB7wEA8jEY8+tWjXrY5ao2QSBp5qFKqoCc0pqFPRQE6jNMTVrszTC5cS2TG87QTBEkGOfWB86QEP2oNu8SQRj3sdYGM5muU1ox7O27eLrlGJPKAAQfKMVnr9sKxUGQDAPnWeJprZbfovI5Om3ZCaW6lFKK0IFNKaUU9FANNPSp6dAKkKiTVzQ6ZLiXgxYKLcyPCWAdRtG4YJGeOlROelWOMbYE1fasYt/zH+g/rQ92djLEk+uaN2eyAG4OBMEyZJwCRHSelWB2co2gAySSfWP0K55Tb5KWNgOxobjI7iYQAnBMyYxHXzrmth8YOTitz2PqLduzet3FUs+0ITykHdK4JyT6cUN/ZGhSV+0D+I+lZa92afGZZtO4zBx+XUV0sXHU+EkHy6fMHFaz/AA+WIK8yOv661w02iEoSgOQDuExkCQTx8aNdcB8RRt35Yo42uuCOhjy/tXQ1d9pNEj32a0Nqz4AeQJxJk/DmuCWW2MzhIAwdzbpkcLtjzHPnXRjzWknyRLG09iuTSmlFKK3ozGNNTkUqKAjTGpGok0UMaomnNMaVARNRqRqNKgBy2IMsZx/qgmfkeD/LXCxGCwIT7wx5Z+tW74AgqBuIyM+7E/HM+XT6cVvqyKjSCDyRPSIxXjwe9l0WdFqY2hgzEYEE8H/qHxoqTQm2ltmDhgpWNyzGBiRHBgcCiKXg8xwPORPrnp616viuk0/8GUjpNKok0prpoRKlTTTzSooekDFNNKaQBzU6i41rvO8cnYFJ3GWBMFGnkSPoPqD3n7p/D+9aG4v+QB/0/wDqms9NRCTapvhsuTW1LoUt5UvF6fX/AGp5pTT0k39DbW86cIfOkDTzRpQtTEUxz+sim7v1P4f2rrcWI+FQmmoobk0K1Y3MFWZYgDJ5Jiteuit21Be4FEAkTlgTiR18MD60K9m+z2uOXFu4wQCNjKg3sQoBdjgeKTtkjFbZPZ8oFizpbZHBffqXPQAl9seWD0rk8hpS0o0xva2Y79qsFm2XFLF1IBB91V4PHWRzXQNLLts3m2rB22nOSecDjitm/ZlzcFOtdPCQBbS3aE7gdiyrEjnqTipp2JcVnLavUsAoPvLJPnhAOPIVg2jVSoyFqxcOf2O+f/tOPzFWXtXdsfsd75pt6+taxOyVIzc1RHn3rCP5WFU9T2Fp7kDvb5IAaDqLpxJhvfxwfpU6Ux/IwG1m7O46e+IM7Nk5+IHPzqsG2gh9LqRk/wDgsQJ9QK0tv2asFW/eXgPNdVfM9Jkv8ua7WuwLdskjU6gZ570vmP8Aibuk/oVLih/IzGX9RpQpB3ISPtoyZ6dK46pEuWbptlWiGEEcBkLR5RJ/RrfWNHcueK3rrrqRI3rZdSP/ACW1kfOqDezlx8XO4uruIJ7rurm0swO25bbJg8Fegqsb0tMmU9So8umlNWNdpWtXHtuIZGKkSDkeo5rhbIBE+detXaOU6akKNoX7o3f6pM/0rjNW+0nVmBTiAPiepqiaUVsVKk3RI1E01MWp0TYiaiTSNMaVBYxqFSJqM0hlA6joWO7oSIO0T4YHA9DVZgCTIIByIMxnqPx/UV3fTBgWI2nElf7H41wvqwaDMeRkHz868aCVWimWntqdu1uYk53L0mOoiM0aSyQAPLjEYrNWnyD8pBrUWL0qCWBP+/X1iu7w3UmvoiRDujXRdPTm9Td9Xc7J2G/ZzUl05pu+NLvjS3DYdrVQa0aXeE0t9Lco0t5P8hH8KH/8tZpE9K1N0f5Kf+Gh/wCdazSmscTe/wCy51tXokFFMbQqQNPNakERaFSFpRk04qn2pfNtJBiTBxOIn+1JulYBFLPeMFCyTAAUSTjAAHJNcO7mq/Yl4rcW0TC7gFbDbTMZEwVHxp7WutqoB3kgxJIBOeYAP59KmM9wo1Hs5da3cIRv3dy3cUg8h1AImMEgRGeGJxkVou0e23N1kI2omJ4LCVlh8txxxWBftG0LaNbRxcDPMG4TtIAHhkLMA/hXE9pXWZma3ccmCZLp9QvwGZ6VzONybqzW0kkafV9v95fdjd7sIu5C0qu5Xgg58cgMR67Rmjfst2+vduLzgMXn6quBJ9DXn2l1TJv/AMsBuQrlQxkg+Lxkkc8iqaX7i57hCT98qw/lmJpOGz2HqPSdReS5cdnuZn92QpbcvTaQw2EEfWfWnbVaYagXG1E3UsQwDGHGwgqRwAXIbHileYMV5x+1XcH9ns4/gtwfjnNdx2jf7sWu6G0PvClk2zEQVjzqWmNNG80PtNbNpkwJLAS+fdBHJmJMfOuNn2itvpLksFhXJzDEELgAA4Mx86xa9+2BYtSfJban4z04OamNLqWyLUYGFZFUgEZILQTHNPTfQ7Nx7Na42ylvvC9tAT3hYsNsDbDRHEAicGeYrvpvaGFuozDwXiikeRlhj8J+NZPXWNXcbcunUKwGFe35HhbbgEHBkrVJdLqhP+XaDyAitLAxM5MijQ3yhbLgftY73Vi+8sGYmAOblyPiSIaT96qDiB19ABJJ8gKKahNttFXSXEIB7w9243GSZEgiAI4ihGpa33guSw2QCvVgWyQDEET+AxXTHMoxSp2ZuDbJMBAyBjOagU59MH9fOi3s52Q2quPeYeBSxTw++4EgR1A94+fEyaq9sJsc3CPfOQMxcA8QxxJk1rDI2t1REo0VXtnaMYznzriVq1qO3zcspa7sBbZJkTu+fTrVYNIkcU8crW/tidENtMRUjSVZOeKpgiDpH69JqEV0uKASBwOK5zUlMrahLbNG4ZWCABukDieI44/vVPWBwyg+7GG2xMEAsZ+WZpFdxkGTEnoR1kD9cV2vOQktBPA6YIGY69DBHnXjaktkVRxteEyy+Dkz1Hp5Gj2ndbkC3nAgD6QJj0oDYvnjz+XyzijPs9qO7uBTCmQAWB4O0QYBPBniMCtcWeWJ2qFpUtmdWEGD0pV0ur4m/wBR/OoxXtVe5gMKenA9KkPhSaGiFIqanNdCigS1xRADEQ5IBMA4WOfI1lOcYq26LjFy4NLeH+Sj/hW/zU1lFWtGXuNba2LZhbe3cJglYWYjiR0JPpQRuztSJJtgIolj4p2+eVEHNc2PLFXb7NZq2kjhFSUEzjiuq6a40bBumYAKyY5xM1Y7PtmH3ysoVXwlpaQfszEQPrW6nFq0zKf42U98ZJgeuK5pYGq2qrAAgnJAyOnx6Vy7Vtt3RlTyOnzrn2UgSIHBBP8AEfIelKc99PQRVmn7H7M04Xx20mY8cuzZPuqT1jOK0Om0Vu2y7bb/AAFnZ59WX54qv2IlxkKAQGzhdhnb0KxHE/qKNbLhtqj3G3Lu4ciVQfaZSDPhnBHMetKc4xRajZU7R0q48FzfG0S9tZ8PG3fPGeOk1wXTEie4UCB777QTzznEzFcPaDRoG09yYL31BJlmO1mIJZiT7rEVcXs+1dd2draFbhBlVlo8cmSJnbGZ5NZvKlG2UkCO1LhtiHSwm7jBuExyPcnrH/mHnQ9W3Dcty1HXG0gyMwSCJIJ+dF+07FvZqrYIItGVKqoHuWyYjoZn5egoH7J21uanunZwjyCV97wq5HQ/dj51E51uUidi28x3tuQPJZgAZjdxFS0N7fcVN6MzERNpoJgnkEDoc+lazVdnaa1aci4+7YhXdgFirGAAo8p9YoH7G92WJzuVPl1H6+NZwnqv6KUuKCdp9phrmlETiBOBmfHjjM12v3Qqlz3JUECVDN4iYA8JMmTxRi1p7HdKWZi212PJllMnkHqZ9PSKE9soDbuckLcG3ofC6gTPX5UQnboHKy3pbguJuVLRUQCSXt5gGPEn8I/l9KVtG5S1ZgcFb54+VvjNXbmnW3bTG4BGaD1JgdPQkUO7PRLniCKhYGTAViCBmQAY+HUGrWT8tPZCjtZ3s3RclVQMVGRbuo5WPPdEGa5dpaW0VAupdUHBkBvskydhafl86tXtLbtoC2cgifDk7VkcEfLyoR7R2wVUFyBvCrLMSNyRzzx6/wBI0Td0NLYfUdi2kKtZvPaYe6CWAmOdrGPSYNDO0PZ+8UYyXZoIe2oILKIDQu0zBAwOBS03apt2X2XSz7UcbizwpIES+OokfHjmr3ZnaF+EDW1ub3K+Bu7dQvvOQDDenHukTTuhGN1fZN22CpCFgSZJKOefs3Ap5jr0quBtthXQqd0yVIVQeSDwRiOfKvS7/aqNbY3FcAXTaBZFcNG4bvDBjwn1486FnS6Ul8oIcWyFZ7RDyTtCnBypzMHb6U4+0ydKZjtJpdO8brriZyEBGPUMfyrn2nas28pcZ12SGj3nb3QOIWASTWqf2as3CdpYNkSVDxHTcni/Ghuv9lDbR27zwKpJh8xH3XE/81EpT9hpQC0aW3G0i6zqBu2qm3pMdT8KNP7KHobgHkbbz/yrFduzOyrtiwxeyzM53G4HU842nOBk5mfEflyfWamfdOMYQR/01EnJJbkuLfBgGuDMDp0846E/HpXbTorrtnPUR1jp69frVW6ZzGCM8mD/APNW9JzxB88ECcSPKK8yVJWi1yD2UhtpxBgzGD+hV/SO48QMFQSD1wCcfrrVe9aIcbuD1MgmCRJ9f7irDEDC46+Zn0/XWrdukJFjT9qGACsnqxOM/rk1au9oqoBiSVBweuZH4UNAJHi+H6Hzpv2q4mFYqJxB6j9Cu6PkySpsz0oK29cpElSOODMTxPFW1ZSoce6QCD8ay6XWE5Oec85nPnV2xdPd7QSI6AnPinzx8hVR8uSvUPSugnodT3m7ERH41a1KeF//AKS/+oKz2nRRcIZ9qwTIG7pIxieavaa3bYkLeaesWzJG4DzE88Vlkn8uNJujTHPQ7o3S39tsoADJYMTbd8FzEMBjjz6U+vuTbaUMiyFB2LiAMyTIET4eR8qyOp0t1EdjcuiADlGAJJO0E78Sevqa4pqNUE991JJRlZX2hQgjc0dSSu38uay+JN2mP5K6NZ7O3ALQDMR+8PhDgThOQemOQevWiDXUI2goTuc+PxRKj7QMkCDg4AG6sz2brrtsDaSUD2yx7vcF3pDglVncGxgiQTGc02m9obxgFlDSi7AryJdldVzPhAUgHoY5FQoNsUpKzTX7K7H2W1ICuVUWZyucXDAmR5dcVgNLJYTwDPzmaLavt653yG5ZbekqZd4k4JAIlBxj0zNCtJO4D1Hz+FdML7EegdiawWwjMYkosSAc245+dEdZrLds7XZJJuQrMN3iBUMF6iT6cUG7JZTgAM6KX27d/hVCcAAncdhGBPFaXsjVNfk22KAy8bdxG4K0Qw5knGOfSt8qUk0/SBdAjtu+ly3pdjBtmqtoYEQTsIBAEAw3A86m/bX7O7qlq6+5yZ7i6onaUgMUhueRg4867+11xQtjdO79rttEcgsgnHHEfEGrdnRvqke6brpb3DaEaGO3wmD0UwcdZrGUU4K+Brkyep7RNxtUSjqzp3kFCoX3FIls/Z8ulBOwNXdsXe/t2y7IxAEeHKsp3QZ4ea0Xb+hfTG+Hlw9sFH+8oYYg8RP4/Ud7H9lHUXXQsUQDc5HOCQFHqd3wwTmIonVL0Uhdq9tarVDbcs7AAoBSZlEcCZYiPGZ+VQ9kdW9tXubS4C5VYLMJPAmSa1mu9k4RmshyIPvsGkEQSNoGYMxHwrL+zf7u44g+FSYjHhJP9KmFU6BVqVGh0XaF8IgXT3HARsnaCTc27ohoMAYgdetd+0NUz2XL27iMzo53qNg3XFkKRzETnz61afs5rOl79lZgiB0S24EYAUZGRGfl1NV/aZe7tPbMtJRxPO0uoIM+RBEcVONfkU6d0Ge19QYFtLdxptzKICDLgRuzBEE8eXnQfsrdZHd7L8AbVL22MQCPfgKigAYjkzzNaPSMDsGRtTPTDEY+q1y7UARcloYMBJ3ZEnPqQJ9M1ajFZPshXQD9oNaVtom91farSmnuXF567SAB4Tgmc0G7T1Xeqm3kXrcllZBOyftZ9OucVo9BZa+7gO6IipOCCXaTEekGfjWb7WutDBidyX1EkyQVXz+INbKtbK6A76K8UYqgKm2AMopObbEwSGIhWycc0X7Et3F74i253W7qLtBbc4e4CoAkz4l6dRXLtC4BY2bSCU7zdOPBc2e7HqRz0oj2fbTa+59puG8jN1ClyAw/nbI8qlrmyWqL9t4tqCMJbdoP2XB1J3QftAgevFDbuoHhLKD4XvQczcDXxuPnhRj0opqbdwKCtyAO+VQZ2qw/aiLhA64H0qodPdIXCuWNxFlVO66Df3Fp5BBGJg0L2CKdu1bUh8hkV2BDFTuu92vTiJwPSunbTHunTvX2he78RDT3ZAd5ORM9PnVrX6BFQMjK5KhiASu3YUYzByQMx+BFVj2O+pLIE2EvdyWkAErkz1b3h5DzrP5o6NfRTg0xtfqmt6cqSjhVYkxtYxAWNpAxuUzBrJHtJjnaPq3961et7Mdbb2+SVIA2x91cNOcp5dRQO92A6mChmufL5sItJNbqzRYW+EYDRBiSJOSPUDiuwvhTAnAAkdYPABxyZz5VU07kDHwMcxFdUtsQxy0RJPrkTPoD9DWLVvcwO1y2ZSRhlJAOcSRPlzP0rp2taK3SATwOs/OeuOtWRoHdUge+DkwAMgztmcSB60/aWiu3Lm8IQoiZIgSTAJmrj7BoGhMCT0qOpcEiOetEV7KuEj3eJ98cDP5A1AdjsftIJ4yT/T1q00TpYM3fWp27lFF7FJ/8RcEiQCR1+vH4il/gygkd6McwvqR5+k1WwaGVlRWWWOBAGJmTn8B+FXNT2cF4YYPn5ng/hU/8KRQCbuCQOB1BM4OOOvnUX7LtyT35JyeMk+UznisnFt2nRag64KyagyFKptGJ2KHMGZkZngHzArrqNa7El3YzmZkH4zzXTTaKyuWYvgjb7uSpht3oYMdaivZKsCRcb+WqaTe7HpkV7mqcLtDGDyATnjkcH/aqxcyD8D86vjsgAT3kA9SuD8wa66fs4LcUsyuoYbhJXcAcgNmJ4mtVJRjsS4SbLvZ477aXcbm5e4I8QPJbrgRNK0vuMPvL+vwqvrdCrXN1vwKeELztgR7/AFzngVYtaC421TgLJlW3YJ5OcxWkJppMel+jYdj3B3zrJjuGEAxnuLxJBGQYjrVv2J7QCq5XLIiR4o5X3ZY+nJrL6jXlGc2wVCo4R42ltxdAkZjwXAsn7s1W7O7RW0j5PjW2CFPBWJkkEQc/WqcrTrsXBqPbbX7l08ja3fWyQYJ99Ikgx69aMdga1TonA8J3MRBge8TjaRA9Kwup1Qvl2uPINsgKQSVIUbTuUAcjy61Y7K1VtLSK94rKwwGYIdiCQQckHJ+FRlbcFFekOK3sK+2+pJfbukDTrEyc940nJ6wPpXH/ALPXHf3Z6KuYj7ZHTp6elCvaDV27l7cLhZQgWWnMFjwB61d7F1NhLruWKgpbgqGEsNm7pnO78ambehL6GluzS3tcy2DtkAWLhXLdFBBiIH96yfYjyzuWHE5AJPj4moL2i/dt+/VlKPbjachl27Qdo8xQ6zcthJ3kMI8IDZGSTPy/Gog5Ri73CCWqz0D2j1C/4cykH/u0wJAnukaY45aaj7Y3VUKmACidOgutGSfXiayfanabNphbF2QQqlNpBACKkmfQdD5V37Y7RS+1piSV2NKsCYf94QOMgEipjKUWm/spJWzY6LtBWuFQwO22niAIMFhiVI8uKCXNayaRmOQNXqUBPiMbrhGW4gevTzJoHpNUli4SHZ1O0ErKYkcAgz8Jqu/aG/TG25YN3z3CIlTv3mZ+9LkfCK0U7yaq4G1So23sh2oJuDcjsWtzkA7fECYnIEj6jzrO9u9oKH1HmNWOv+vp8uaE6DV91cuXbZYIfDgRHiSccyAT8yKuaPse5rbjeEqt28CXIgAyYGRnJOKvU3Jy9kNqPJPtfVA20g4Fm4Ppfn6/2FFtNcBS4cZS58Y3udv686IXP+zFdoUajw7SGleu4N4QMAGKyWk0lgKrzc2eLpK7oNvhfFPWSBx1rTVFvkSlZrNYw2CB9i/EHED9r6fT6130dz/uPfy944Y+d3iTz6msfrbWnQIp1JYbzcaAzeJtxh8YI3kQPnNVU1FsFCuobFx7nutIbPi46z09Jp3H2igxob5/fST79wCWJxFsQJ45P1q52neZEdkdlIe6ZBE+F7ZifhMfSsnb2jL3CspcYETLbm2nEYaUPNWu0r1oK+y6zjcBHIMpnrMEzJ9BWMtLxOLrvYpOWpP9Gh0/azAuYgpDGXLHkrGFAIlZ+ddtR2+LjFnAPQH0GPzms3pbU5uXHUNamVWdx3MIInOCpH+qo9m2wqfvFJJZjMRImJEjIkHIxXFn8TFJptdGyyu/Rjb9u2Lh7tiU5Uk+KD94DrzijOmZVgLtJIlyS+THOI53Hw/2ri2laJ2hRzkhcRzS09tQnhIYySxjoOFB61aVuzDTQZ0XaIe5bQ20wzKDsJUbtp37JyRGc8Ub7S0gUFnu2gAfsWQgB5yS8E/EH0FZCyXFxdnv7vPpmfwq/qdKWm5qboEblReAG2z4QeeQcDJIpxxNu7BzSRDWa6yJBu3GBnCqij8QKWl7ftraeytvd3hWHcyyQfsx+stzNDdX3KlQiMzHq5IBJx8Y+VcdXduK4WFVVgnYIEGD15xV6Yp12RrZcW+x4sAnzLkA+uYqI1DmBssr8ZY/nVZ9I128Ut7ipiB6bR59JrVaHRaXSWw95e9un3be6EHqzLl/gIHmTVKCaToWt3VgcWdT3ZuBF2KQCwQ7QSfMmCaGanX3VYY6fcj+tbDQ/tGuuAvhF91BC27aTE4wi/icxOSBvtDYTvJsgBEEb2YA3GnLqnRcQPPnPJ0hhjJmkm4pW+QX2fqNTdO23b3ECfdjAHNO3ajLhlAI/hb+1FPZ59jli0YI5I/Kh+rRSzfGtI+MtbTSqlW25bVRTTdg1O1HYwbasT/Cf61otJ2m1yw2i7hQ2/efAS8xG3HTP5jrQqzYAYHyNGOzNStvUC4xkswiPQMY+cCsM+P44OUVdK6MlJtpWUdTpGRmW4Cu0EkNuUwATx1qvaS06krPrBMjPUHNHPaW937G6JAdDg8jBWDWR0u620icVHjyeTEptU3yvQnJptML2tEGlQ7iY6yOfKuGo7JCqSH4jBHnHWaKWlCjeCNpkz+vgc+lUe1+0rb7QnAADGNucHP3uua23TKqOm2Q/wAOchT3ghgMHcOkgY9K56nQm2QCQZIjaCYnzqZ1NvYihj4YkEHmDPyk1O5rUIWCDwDOPP0ppv2FRob/AAowD3i+LymP1NXrXs68SXXEmACScT1xVN9VbJA3QAPLr1yBmrem1thSTuYsJKQkAFkKmc8Qfw61nJz6f+i4qF7/APTjY7I3Wy+/G8LEcHGZn1/CuVrs5J8Vz0wJ/rVzs3tBFsurEybkj5BT154qimuUzzx5imtTbthUaRe1fY6om9XZgBzGOKoqCCFa43pkwMdKIDtL9wyhYEZ8U8DpgRQM6sbp8p/KiKf9xM9PRad15LsRPUmogTwWMRycVb0uhi2ty5ln91fJfvH+nzrsLO4GlKaiOMHIqjWrbUqAWBMlclSY5OR+hRTs72jvWUFxE9x95LDHI2id4nqIg/nQPUmGhY5iYn/auOrvvDIXJAO2C2MH8sfgKSlZMoLs9Cf261qrPdWmBB93d1ERlvWh+kUXNOltUsoyjId7iuWzLGUgmZOCQOKz51yBVi40x0BMEiOgpDWqWHhdsZnE8ecCtFpYpwXRYudmEgsSMk8FvPkSBS7G0qftFpLhLIbioQCZ2k9CIM1x/bW2mA3qCQZH+39flUuyrxbUoN20qwZYRnJdZIHdpls9BVaIrczVuSizX+2VmzaUm2GKF0CgGYlHcmSeD3ogen0yI7Rt4iVMgyw8t3BXj3h9KLe091ikF5IaSCly2VOxQF2uAw8AEY4IzWRVwSB5THHxrHJii6ds1jNxbQdGvtg4uk4E7pBlmVjkjMFR8ajp7traJcT/AKk6Y+76UFK1xKjzH4Vzywt9s1WSukcb/PiaTPnuMRUdP2iwJVAIx/8ANTv9nlcMflEY84PrTW7YFaqLMWzvpL103JDRP3QJ+U1e1JZA2GJP2mYs3HmePlUrKAMlX+0WEVSsTRlFY715mR+dGNP2XeuKbndswAALAgiqjqJr0X2On/DtSRMwc/KjdMcYqmYzTa1bW4WiSzbZJGxVAGAMyT+FddFpbmrubFYkn33PQfHp8KD7odj1Nb/2HgWWIGd0kjkATj9Z8q6otKF1uc2iTnT4Lva2kt6TTd0ruEO0uACDc9Jjr1M8CsLrNWb1wBRAPA4AA+eAAK33tvcD6fkk9ARz6g8jFebaR9t1GHIIgcyeg5z8KjFKTlSPWzY4rx01zYQ7Ksd46rBMkdc5MY9alrLYBeABtPA6CDxPr/Sreh1C6fUB1Xw23UfEK7znr7jAGu+v09u3fdbh8M7dw+4wlXgciCp+Vbpzc2l6OH5LxKfsz1h9xoo+gud2LhQbQH2sfvbG49aGtZNu4UbkH+vPrXp+ps7ux15kCek8/lWE5NppiiraMArt+zoCR7h8+JOaAI53Yo3dIFi3nhXX/nahGnWTUYv4pfbG1udy77DtJywJUyVJAOY6HPSh1xvFkfn9341pk0q92Tma46rs1GSRNafGxOgErp5H6f71PvLfk30/91dH0fkfwpHRHofpn8qmmgRzDp5N/Kf/AOq6Kyfxfy/+6uZ05BzV+xpFjM/OF6x1+v6mhyopFc3AS+D0I4AnaZPXNV0bnwjnzbzo4nZpAhQSTzDBjxyABMTA4qJ7Gup76FB/H4MfM0oyvgHQOxtJCLxyS5//AGiqiMR0HJ+9/Q16H2X7EtfQEXVUEcAb8xwTMc/h50L7V9jrtj3wpXowPI+8R0+ZqqfZLaBWuvXCEIdANgA2qcDyMsZqspbrcPyCj8hRPS9lB1VQZcfZzkejZC/E1e1Xskwkq/h9cFT6jO4eoNcmfJHHJKTqzfHCUlaMv3asTJJI6nPyrlqLI2uwPXA+dX9T2SUJBuKGHQnBEcg+Vdux+xzebZvX5kAfXcK2hBy2iZzkor8iDJFtTP6irGns+MfA/lWgb2MbuyxuN4R7u0Aj+ZhI+E1nb47t4V93rj6QK6Vi07szWaMtkWVsQqn0afoazi6oq0jcpAwfdPPQg80U1OtYrE1S0Wje64Vdx+AmpybtKIpbhpHZ9KGYli7MSzGSY8IyecCPlFAEUdeho1rtE9i2EaQfF5gkE8GOaCWrkcz6mJn5YrKepbMWPs73Eifj+cVXdc8/jVxHnyb4c9emCea5OueY9I4rNs2CfbljczETjgeXSOPjQEDNKlWzMy+l2SPSu2pvyKVKpQwemWAmPxr0b2c1S29K9sAw856ERE54+FNSoZcOGYHXoAxIxnj0+dHOydX3arOV6CQ0HziYH4U9KtVwZIM9qa1rliGgjOR0jzB+HMzWI07DvEPk6/8AUKVKtfHitZ0Tm/iC/aLQC3mAfmrqG/G41XtQwu2rFw8x3LnnxplJz1QqAf4WpUq0a/rI5PF38d37ZT1NosqXMErAMHlSfCx/6fpW+0+sA0MSJ28SR6SaVKo8mKUtivG4PNtbc8BHqf160P0zQaVKuaHLLYfs3pWtJ2ibPc2VRF3EMWIGTwBP409KulEGZ1dhRxXG3pQen9aVKiQENTpyOFPyMfhRfsPs8Nt3OJbMKMrPxxSpVjpVlHpvYvY9u2JAJPTfAj4AYoB2/aQX07yWycLJE9JhjjH6xSpVKVMlms7ItqLfgUKCBwCOnwn61nvavSqVYs5AIOGaFH8xjyyKalQ+RoyvYthO8ItjcASMx0+f5VpdTbhPFHHlPy9fwp6VeL/6bvLFHp+L/Ex3aSW9xPhdcgLIJXjK5Jj0MVx9nbVs3wACM4ZTtIPkRn60qVe74yqjzfJezPWFtEW+F4zgeXXHlXl/tT3XeNxu64XGcFYjEdPWlSraPDOWPKMrdzWr9gtPaN0NIL58JYeXlFKlULk3lwav2z0CNal1Ct0AAyfhNeVapEmF+s/0FKlXn5sj+RL6OvHBfG2ViKmNbdXAdgB0k0qVWZn/2Q==",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;

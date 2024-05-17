import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;
      } catch (error) {
        toast.error('Виникла проблема з отраманням контактів!');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const addContacts = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", newContact);
        return response.data;
      } catch (error) {
        toast.error('Упс, щось пішло не так, спробуйте ще раз!');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (error) {
        toast.error('Упс, щось пішло не так, спробуйте ще раз!');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
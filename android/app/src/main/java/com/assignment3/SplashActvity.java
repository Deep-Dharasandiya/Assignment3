package com.assignment3; // ← Make sure that is your package name

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

 class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
}
<?php

namespace App\Services;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Hash;
class UserService {

    public function login($request) {
        if (Auth::attempt($request->only('login', 'password'))) {
            $user = Auth::user();
            $token = $this->createToken($user, $request);
            return response()->json(['token' => $token,'type' => 'Bearer'], 200);

        }

        return response()->json(['message' => 'Parol yoki login xato!'], 299);
    }

    private function createToken($user,$request) {
        return $user->createToken( 'admin', [$user->isActive])->plainTextToken;
    }


    public function register($request) {

        $params = $request->only('login','name','password');
        $params['password'] = Hash::make($params['password']);
        User::create($params);
        return response()->json(true, 200);
    }

    public function getUser($request){
        return $request->user();

        // return $user;
    }

    public function setShop($shopid){
        $user = Auth::user();

        $user->active_shop = $shopid;
        $user->save();
        return $user->fresh();
    }

    public function logout($request): void {

        $user = $request->user();
        $user->currentAccessToken()->delete();

    }


    public function passwordReset($request) {

        $user = $request->user();
        
        if (Hash::check($request->old, $user->password) == false) {
            return response()->json(['errors' => 
                ['message' => ["hozirgi parol to'gri emas"]]
            ], 422);
        }

        $user->password = Hash::make($request->new);
        
        return $user->save();

    }
}
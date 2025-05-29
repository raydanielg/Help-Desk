<?php

namespace App\Http\Requests;

use App\Models\HistoryAnswer;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AppInfoRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'tokendata' => [
                'required',
                'string',
            ],
            'app_id' => [
                'required',
                'integer',
            ],
        ];
    }
}

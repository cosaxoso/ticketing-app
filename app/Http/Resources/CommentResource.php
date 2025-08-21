<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class CommentResource extends JsonResource
{

    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "ticket_id"=>$this->ticket_id, 
            "comment"=>$this->comment,
            "user_id" => $this->user_id,
            "id"=>$this->id, 
            "created_at"=>(new Carbon($this->created_at))->toDateTimeString(),

        ];
    }
}
